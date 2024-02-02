import { render, RenderPosition } from '../framework/render.js';
import { updateItem } from '../utils.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import ButtonNewEvent from '../view/button-new-event-view.js';
import WaypointPresenter from './waypoint-presenter.js';
import WaypointListView from '../view/waypoint-list-view.js';


export default class TripPresenter {
  #headerContainer = null;
  #mainContainer = null;
  #pointsModel = null;
  #waypointList;
  #points = [];
  #buttonNewEvent = new ButtonNewEvent;
  #filter = new FilterView();
  #sort = new SortView();
  #waypointPresenters = new Map();


  constructor({ headerContainer, mainContainer, pointsModel }) {
    this.#headerContainer = headerContainer;
    this.#mainContainer = mainContainer;
    this.#pointsModel = pointsModel;
    this.#waypointList = new WaypointListView();

  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderApp();
    render(this.#waypointList, this.#mainContainer);
  }

  #renderWaypoint(point) {
    const waypointPresenter = new WaypointPresenter ({
      waypointList: this.#waypointList,
      pointsModel: this.#pointsModel,
      onPointChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    waypointPresenter.init(point);
    this.#waypointPresenters.set(point.id,waypointPresenter);
  }

  #clearWaypointList() {
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();
  }

  #handleModeChange = () =>{
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatePoint)=> {
    this.#points = updateItem(this.#points, updatePoint);
    this.#waypointPresenters.get(updatePoint.id).init(updatePoint);

  };

  #renderFilter() {
    render(this.#filter,this.#headerContainer);
  }

  #renderButtonNewEvent(){
    render(this.#buttonNewEvent, this.#headerContainer,RenderPosition.AFTEREND);
  }

  #renderSort() {
    render(this.#sort, this.#mainContainer);
  }

  #renderApp() {
    this.#renderSort();
    this.#renderFilter();
    this.#renderButtonNewEvent();

    for(let i = 0; i < this.#points.length; i++) {
      this.#renderWaypoint(this.#points[i]);
    }
  }
}
