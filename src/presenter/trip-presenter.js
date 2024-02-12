import FilterPresenter from './filter-presenter.js';
import NewPointPresenter from './new-point-presenter.js';
import NoEvent from '../view/noEvent.js';
import SortView from '../view/sort-view.js';
import WaypointPresenter from './waypoint-presenter.js';
import WaypointListView from '../view/waypoint-list-view.js';
import Loading from '../view/loading-view.js';
import { generateSorting } from '../utils/sort.js';
import { render, remove, RenderPosition } from '../framework/render.js';
import { sortWaypointByDate, sortWaypointByPrice, sortWaypointByDuration, filter, handleButtonDisabled } from '../utils/utils.js';
import { SortType, UpdateType, UserAction, FilterType } from '../utils/const.js';


export default class TripPresenter {
  #headerContainer = null;
  #mainContainer = null;
  #waypointModel = null;
  #offersModel = null;
  #destinationModel = null;
  #filterModel = null;
  #pointsList;
  #noEventComponent;
  #loadingComponent;
  #tripInfoPresenter;
  #waypointPresenters = new Map();
  #newPointPresenter;
  #newEventButtonComponent;
  #filterPresenter;
  #sort;
  #currentSortType = SortType.DAY;
  #sortingState = generateSorting(this.#currentSortType);
  #filterType = FilterType.EVERYTHING;
  #isLoading = true;
  #isError = false;


  constructor({ headerContainer, mainContainer, waypointModel,offersModel, destinationModel, filterModel, onNewEventClose, newEventButtonComponent }) {
    this.#headerContainer = headerContainer;
    this.#mainContainer = mainContainer;
    this.#waypointModel = waypointModel;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;
    this.#filterModel = filterModel;
    this.#pointsList = new WaypointListView();
    this.#newEventButtonComponent = newEventButtonComponent;

    this.#waypointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#newPointPresenter = new NewPointPresenter({
      destinationModel: this.#destinationModel,
      offersModel: this.#offersModel,
      pointsList: this.#pointsList,
      onDataChange: this.#handleViewAction,
      onClose: onNewEventClose,
    });
  }

  get waypoints () {
    this.#filterType = this.#filterModel.filter;
    const waypoints = this.#waypointModel.waypoints;
    const filteredWaypoints = filter[this.#filterType](waypoints);

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
      waypointModel: this.#waypointModel,
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

    if (this.#sort) {
      remove(this.#sort);
    }

    if (this.#loadingComponent) {
      remove(this.#loadingComponent);
    }

    if (this.#noEventComponent) {
      remove(this.#noEventComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }


  #renderWaypointList() {
    if (this.#isLoading) {
      this.#renderLoading({ isError: false });
      return;
    }
    if (this.#isError) {
      this.#renderLoading({ isError: true });
      return;
    }
    if (!this.#isError) {
      const waypointCount = this.waypoints.length;
      const waypoints = this.waypoints.slice(0, waypointCount);
      if (waypointCount === 0) {
        this.#renderNoEvent();
        this.#tripInfoPresenter.destroy();
        return;
      }
      this.#renderSort();
      for (let i = 0; i < waypointCount; i++) {
        this.#renderWaypoint(waypoints[i]);
      }
    }
  }

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };


  getPageUpdate(isOpen) {
    if (this.#noEventComponent) {
      remove(this.#noEventComponent);
    }
    if (!this.#isError && isOpen) {
      const waypointCount = this.waypoints.length;
      if (waypointCount === 0) {
        this.#renderNoEvent();
        this.#tripInfoPresenter.destroy();
      }
    }
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this.#waypointModel.updateWaypoint(updateType, update);
        break;
      case UserAction.ADD_WAYPOINT:
        this.#waypointModel.addWaypoint(updateType, update);
        break;
      case UserAction.DELETE_WAYPOINT:
        this.#waypointModel.deleteWaypoint(updateType, update);
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
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderWaypointList();
        break;
      case UpdateType.ERROR:
        this.#isLoading = false;
        this.#isError = true;
        remove(this.#loadingComponent);
        this.#renderWaypointList();
        handleButtonDisabled(true, this.#newEventButtonComponent);
        break;
    }
  };

  #renderFilters() {
    const filterPresenter = new FilterPresenter({
      filterContainer: this.#headerContainer,
      filterModel: this.#filterModel,
      waypointModel: this.#waypointModel,
    });
    filterPresenter.init();
  }

  #renderLoading(isError) {
    this.#loadingComponent = new Loading(isError);
    render(this.#loadingComponent, this.#mainContainer);
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
    this.#renderWaypointList();
  }
}
