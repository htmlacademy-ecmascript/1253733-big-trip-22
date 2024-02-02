import { render, replace, remove} from '../framework/render.js';
import Waypoint from '../view/waypoint.js';
import WaypointsEditView from '../view/waypoints-edit.js';


const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class WaypointPresenter {
  #waypoint = null;
  #waypointEdit = null;
  #point = null;
  #destination = null;
  #offersByType = null;
  #waypointList = null;
  #pointsModel = null;
  #handlePointChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({waypointList, pointsModel, onPointChange, onModeChange}) {
    this.#waypointList = waypointList;
    this.#pointsModel = pointsModel;
    this.#handlePointChange = onPointChange;
    this.#handleModeChange = onModeChange;
  }

  init (point) {
    this.#point = point;
    this.#offersByType = this.#pointsModel.getOffersByType(point.type);
    this.#destination = this.#pointsModel.getDestinationById(point.destination);
    const prevWaypoint = this.#waypoint;
    const prevWaypointEdit = this.#waypointEdit;

    this.#waypoint = new Waypoint ({
      point: this.#point,
      offersById: [...this.#pointsModel.getOffersById(point.type,point.offersId)],
      destination:  this.#destination,
      onFavoriteClick: this.#handleFavoriteChange,
      onEditClick: this.#handleEditClick,
    });

    this.#waypointEdit = new WaypointsEditView ({
      point: this.#point,
      destinations: this.#pointsModel.destinations,
      offersByType: this.#offersByType,
      offersAll: [...this.#pointsModel.offers],
      offersById: [...this.#pointsModel.getOffersById(point.type,point.offersId)],
      destination:  this.#destination,
      onFormSubmit: this.#handleFormSubmit,
    });

    if (prevWaypoint === null || prevWaypointEdit === null) {
      render(this.#waypoint, this.#waypointList.element);
      return;
    }
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#waypoint, prevWaypoint);
    }
    if (this.#mode === Mode.EDITING) {
      replace(this.#waypointEdit, prevWaypointEdit);
    }

    remove(prevWaypoint);
    remove(prevWaypointEdit);
  }


  destroy() {
    remove(this.#waypoint);
    remove(this.#waypointEdit);
  }


  #escKeyDownHandler = (e)=> {
    if(e.kay === 'Escape') {
      e.preventDefault();
      this.#waypointEdit.reset(this.#point,this.#offersByType, this.#destination);
      this.#replaceFormToPoint();
    }
  };

  resetView(){
    if (this.#mode !== Mode.DEFAULT) {
      this.#waypointEdit.reset(this.#point, this.#offersByType, this.#destination);
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm (){
    replace (this.#waypointEdit, this.#waypoint);
    document.addEventListener('keydown',this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint (){
    replace (this.#waypoint, this.#waypointEdit);
    document.removeEventListener('keydown',this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #handleEditClick = ()=> {
    this.#replacePointToForm();
  };

  #handleFavoriteChange = () =>{
    this.#handlePointChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleFormSubmit = (point) => {
    this.#handlePointChange(point);
    this.#replaceFormToPoint();
  };
}
