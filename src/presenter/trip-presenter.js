import { render, replace, RenderPosition } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import ButtonNewEvent from '../view/button-new-event-view.js';
import Waypoint from '../view/waypoint.js';
import WaypointsEditView from '../view/waypoints-edit.js';


export default class TripPresenter {
  #headerContainer = null;
  #mainContainer = null;
  #pointsModel = null;
  #points = [];
  #buttonNewEvent = new ButtonNewEvent;
  #filter = new FilterView();
  #sort = new SortView();

  constructor({ headerContainer, mainContainer, pointsModel }) {
    this.#headerContainer = headerContainer;
    this.#mainContainer = mainContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderApp();
  }

  #renderWaypoint(point) {
    const escKeyDownHandler = (e)=> {
      if(e.kay === 'Escape') {
        e.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const waypoint = new Waypoint ({
      point: point,
      destinationsById: this.#pointsModel.getDestinationById(point.destination),
      offersById: [...this.#pointsModel.getOffersById(point.type,point.offersId)],
      onEditClick: ()=> {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const waypointEdit = new WaypointsEditView ({
      point: point,
      destinations: this.#pointsModel.destinations,
      offersById: [...this.#pointsModel.getOffersById(point.type,point.offersId)],
      offersByType: this.#pointsModel.getOffersByType(point.type),
      destinationsById: this.#pointsModel.getDestinationById(point.destination),
      onFormSubmit: () => {
        replaceFormToPoint();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace (waypointEdit, waypoint);
    }

    function replaceFormToPoint () {
      replace (waypoint, waypointEdit);
    }

    render (waypoint, this.#mainContainer);
  }

  #renderApp() {
    render(this.#filter,this.#headerContainer);
    render(this.#buttonNewEvent, this.#headerContainer,RenderPosition.AFTEREND);

    render(this.#sort, this.#mainContainer);
    for(let i = 0; i < this.#points.length; i++) {
      this.#renderWaypoint(this.#points[i]);
    }
  }
}
