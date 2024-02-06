import FilterPresenter from './filter-presenter.js';
import NewPointPresenter from './new-point-presenter.js';
import TripInfo from '../view/trip-info.js';
import NoEvent from '../view/noEvent.js';
import SortView from '../view/sort-view.js';
import WaypointPresenter from './waypoint-presenter.js';
import WaypointListView from '../view/waypoint-list-view.js';
import { generateSorting } from '../utils/sort.js';
import { render, remove, RenderPosition } from '../framework/render.js';
import { filter,sortWaypointByDate, sortWaypointByPrice, sortWaypointByDuration} from '../utils/utils.js';
import {UserAction, SortType, FilterType,UpdateType} from '../utils/const.js';


export default class TripPresenter {
  #headerContainer = null;
  #mainContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationModel = null;
  #filterModel = null;
  #pointsList;
  #noEventComponent;
  #tripInfo = new TripInfo();
  #sort;
  #currentSortType = SortType.DAY;
  #sortingState = generateSorting(this.#currentSortType);
  #filterType = FilterType.EVERYTHING;
  #waypointPresenters = new Map();
  #newPointPresenter;


  constructor({ headerContainer, mainContainer, pointsModel,offersModel, destinationModel, filterModel, onNewEventClose }) {
    this.#headerContainer = headerContainer;
    this.#mainContainer = mainContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;
    this.#filterModel = filterModel;
    this.#pointsList = new WaypointListView();

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#newPointPresenter = new NewPointPresenter({
      destinationModel: this.#destinationModel,
      offersModel: this.#offersModel,
      pointsList: this.#pointsList,
      onDataChange: this.#handleViewAction,
      onClose: onNewEventClose,
    });
  }

  get points () {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredWaypoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filteredWaypoints.sort(sortWaypointByDate);
      case SortType.TIME:
        return filteredWaypoints.sort(sortWaypointByDuration);
      case SortType.PRICE:
        return filteredWaypoints.sort(sortWaypointByPrice);
    }
    return filteredWaypoints.sort(sortWaypointByDate);
  }

  init() {
    this.#renderApp();
    render(this.#pointsList, this.#mainContainer);
  }

  #renderWaypoint(point) {
    const waypointPresenter = new WaypointPresenter({
      pointsList: this.#pointsList,
      pointsModel: this.#pointsModel,
      offersModel: this.#offersModel,
      destinationModel: this.#destinationModel,
      onPointChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    waypointPresenter.init(point);
    this.#waypointPresenters.set(point.id, waypointPresenter);
  }

  createNewWaypoint() {
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#clearWaypointList({ resetSortType: true });
    this.#renderWaypointList();
    this.#newPointPresenter.init();
  }

  #clearWaypointList(resetSortType = false) {
    this.#newPointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();

    remove(this.#sort);

    if (this.#noEventComponent) {
      remove(this.#noEventComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderWaypointList() {
    const pointCount = this.points.length;
    const points = this.points.slice(0, pointCount);
    if (pointCount === 0) {
      this.#renderNoEvent();
      return;
    }
    this.#renderSort();
    for (let i = 0; i < pointCount; i++) {
      this.#renderWaypoint(points[i]);
    }
  }

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this.#pointsModel.updateWaypoint(updateType, update);
        break;
      case UserAction.ADD_WAYPOINT:
        this.#pointsModel.addWaypoint(updateType, update);
        break;
      case UserAction.DELETE_WAYPOINT:
        this.#pointsModel.deleteWaypoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#waypointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearWaypointList();
        this.#renderWaypointList();
        break;
      case UpdateType.MAJOR:
        this.#clearWaypointList({ resetSortType: true });
        this.#renderWaypointList();
        break;
    }
  };

  #renderFilters() {
    const filterPresenter = new FilterPresenter({
      filterContainer: this.#headerContainer,
      filterModel: this.#filterModel,
      pointsModel: this.#pointsModel,
    });
    filterPresenter.init();
  }

  #renderTripInfo() {
    render(this.#tripInfo, this.#headerContainer, RenderPosition.BEFOREBEGIN);
  }

  #renderNoEvent() {
    this.#noEventComponent = new NoEvent({ filterType: this.#filterType });
    render(this.#noEventComponent, this.#mainContainer);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearWaypointList();
    this.#renderWaypointList();
  };

  #renderSort() {
    this.#sortingState = generateSorting(this.#currentSortType);
    this.#sort = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
      sorting: this.#sortingState,
    });

    render(this.#sort, this.#mainContainer, RenderPosition.AFTERBEGIN);
  }

  #renderApp() {
    this.#renderFilters();
    this.#renderTripInfo();
    if (this.points.length === 0) {
      this.#renderNoEvent();
      return;
    }
    this.#renderWaypointList();
  }

}
