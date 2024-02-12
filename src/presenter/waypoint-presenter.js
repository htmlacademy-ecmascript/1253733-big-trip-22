import { render, replace, remove} from '../framework/render.js';
import Waypoint from '../view/waypoint.js';
import FormEdit from '../view/waypoints-edit.js';
import { Mode, UserAction, UpdateType } from '../utils/const.js';

export default class WaypointPresenter {
  #waypointComponent = null;
  #waypointEditComponent = null;
  #waypoint = null;
  #offersModel = null;
  #destinationModel = null;
  #destination = null;
  #offersType = null;
  #pointsList = null;
  #offers = null;
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
    this.#waypoint = point;
    this.#offersType = this.#offersModel.getOffersByType(point.type);
    this.#destination = this.#destinationModel.getDestinationsById(point.destination);
    this.#offers = [...this.#offersModel.getOffersById(point.type, point.offersId)];
    const prevWaypointComponent = this.#waypointComponent;
    const prevWaypointEditComponent = this.#waypointEditComponent;

    this.#waypointComponent = new Waypoint({
      waypoint: this.#waypoint,
      offers: [...this.#offersModel.getOffersById(point.type, point.offersId)],
      destination: this.#destination,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteChange,
    });

    this.#waypointEditComponent = new FormEdit({
      waypoint: this.#waypoint,
      offersType: this.#offersType,
      offers: [...this.#offersModel.getOffersById(point.type, point.offersId)],
      destination: this.#destination,
      destinationAll: this.#destinationModel.destinations,
      offersAll: [...this.#offersModel.offers],
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      isEditMode: true,
    });

    if (prevWaypointComponent === null || prevWaypointEditComponent === null) {
      render(this.#waypointComponent, this.#pointsList.element);
      return;
    }
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#waypointComponent, prevWaypointComponent);
    }
    if (this.#mode === Mode.EDITING) {
      replace(this.#waypointComponent, prevWaypointEditComponent);
      this.#mode = Mode.DEFAULT;
    }

    remove(prevWaypointComponent);
    remove(prevWaypointEditComponent);
  }


  destroy() {
    remove(this.#waypointComponent);
    remove(this.#waypointEditComponent);
  }


  resetView(){
    if (this.#mode !== Mode.DEFAULT) {
      this.#waypointEditComponent.reset(this.#waypoint, this.#offersType, this.#destination, this.#offers);
      this.#replaceFormToPoint();
    }
  }

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#waypointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#waypointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#waypointComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#waypointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#waypointEditComponent.shake(resetFormState);
  }

  #documentKeydownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#waypointEditComponent.reset(this.#waypoint, this.#offersType, this.#destination, this.#offers);
      this.#replaceFormToPoint();
    }
  };

  #replacePointToForm (){
    replace (this.#waypointEditComponent, this.#waypointComponent);
    document.addEventListener('keydown',this.#documentKeydownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint (){
    replace (this.#waypointComponent, this.#waypointEditComponent);
    document.removeEventListener('keydown',this.#documentKeydownHandler);
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
    this.#handlePointChange(
      UserAction.UPDATE_WAYPOINT,
      UpdateType.MINOR,
      point,);
  };

  #handleDeleteClick = (point) => {
    this.#handlePointChange(
      UserAction.DELETE_WAYPOINT,
      UpdateType.MINOR,
      point,
    );
  };
}
