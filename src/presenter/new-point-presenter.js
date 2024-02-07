import { remove, render, RenderPosition } from '../framework/render.js';
import { UserAction, UpdateType, DEFAULT_TYPE } from '../utils/const.js';
import WaypointsEditView from '../view/waypoints-edit.js';

export default class NewPointPresenter {

  #pointsList;
  #handleDataChange;
  #handleDestroy;
  #destinationModel;
  #offersModel;
  #formComponent = null;

  constructor({ pointsList, onDataChange, onClose, destinationModel, offersModel }) {
    this.#pointsList = pointsList;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onClose;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
  }

  init() {
    if (this.#formComponent !== null) {
      return;
    }


    this.#formComponent = new WaypointsEditView({
      point: { type: DEFAULT_TYPE, basePrice: 0 },
      offersById: [],
      destination: { name: '', photos: [], description: '' },
      offersType: this.#offersModel.getOffersByType(DEFAULT_TYPE),
      destinations: this.#destinationModel.destinations,
      offersAll: [...this.#offersModel.offers],
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      isEditMode: false,
    });

    render(this.#formComponent, this.#pointsList.element, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#formComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#formComponent);
    this.#formComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_WAYPOINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
