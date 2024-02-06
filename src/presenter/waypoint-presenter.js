import { render, replace, remove} from '../framework/render.js';
import Waypoint from '../view/waypoint.js';
import WaypointsEditView from '../view/waypoints-edit.js';
import { Mode, UserAction, UpdateType } from '../utils/const.js';

export default class WaypointPresenter {
  #waypoint = null;
  #waypointEdit = null;
  #point = null;
  #offersModel = null;
  #destinationModel = null;
  #destination = null;
  #offersByType = null;
  #pointsList = null;
  #handlePointChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({pointsList, offersModel, destinationModel, onPointChange, onModeChange}) {
    this.#pointsList = pointsList;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;
    this.#handlePointChange = onPointChange;
    this.#handleModeChange = onModeChange;
  }

  init (point) {
    this.#point = point;
    this.#offersByType = this.#offersModel.getOffersByType(point.type);
    this.#destination = this.#destinationModel.getDestinationById(point.destination);
    const prevWaypoint = this.#waypoint;
    const prevWaypointEdit = this.#waypointEdit;

    this.#waypoint = new Waypoint ({
      point: this.#point,
      offersById: [...this.#offersModel.getOffersById(point.type,point.offersId)],
      destination:  this.#destination,
      onFavoriteClick: this.#handleFavoriteChange,
      onEditClick: this.#handleEditClick,
    });

    this.#waypointEdit = new WaypointsEditView ({
      point: this.#point,
      destinations: this.#destinationModel.destinations,
      offersByType: this.#offersByType,
      offersAll: [...this.#offersModel.offers],
      offersById: [...this.#offersModel.getOffersById(point.type,point.offersId)],
      destination:  this.#destination,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      isEditMode: true
    });

    if (prevWaypoint === null || prevWaypointEdit === null) {
      render(this.#waypoint, this.#pointsList.element);
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
    this.#handlePointChange(UserAction.UPDATE_WAYPOINT,
      UpdateType.PATCH,
      { ...this.#waypoint, isFavorite: !this.#waypoint.isFavorite });
  };

  #handleFormSubmit = (point) => {
    this.#handlePointChange(UserAction.UPDATE_WAYPOINT,
      UpdateType.MINOR,
      point,);
    this.#replaceFormToPoint();
  };

  #handleDeleteClick = (point) => {
    this.#handlePointChange(
      UserAction.DELETE_WAYPOINT,
      UpdateType.MINOR,
      point,
    );
  };
}
