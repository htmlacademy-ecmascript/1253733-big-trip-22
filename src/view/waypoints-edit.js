import AbstractView from '../framework/view/abstract-view.js';
import {POINT_TYPES} from '../const.js';

function createTypeEditTemplate(point, destinationsById, destinations) {
  const {type, id} = point;
  const{name} = destinationsById;

  return `<div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${POINT_TYPES.map((item) => (`<div class="event__type-item">
              <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}"
              ${item === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-${id}">${item}</label>
            </div>`)).join('')}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${name}" list="destination-list-${id}">
        <datalist id="destination-list-${id}">
        ${destinations.map(({ name: namePointDestination }) => `<option value="${namePointDestination}"></option>`).join('')}
        </datalist>
      </div>`;
}

function createDataEditTemplate (point) {
  const {dateFrom, dateTo, id} = point;
  return `<div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">From</label>
      <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${dateFrom}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">To</label>
      <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${dateTo}">
    </div>`;
}

function createPriceEditTemplate (point) {
  const {basePrice, id} = point;
  return `<div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${id}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
    </div>`;
}

function createSaveButtonEditTemplate() {
  return ('<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>');
}

function createDeleteButtonEditTemplate() {
  return ('<button class="event__reset-btn" type="reset">Delete</button>');
}

function createToggleButtonEditTemplate() {
  return (
    `<button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `);
}

function createOffersEditTemplate(offersById, offersByType) {
  const idPoints = offersById.map((item) => item.id);
  if (offersByType.offers.length !== 0) {
    return (
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${offersByType.offers.map(({ title: titleOffersType, id: idOfferType, price }) => `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${titleOffersType}-${idOfferType}" type="checkbox" name="event-offer-${titleOffersType}" ${idPoints.includes(idOfferType) ? 'checked' : ''}>
            <label class="event__offer-label" for="event-offer-${titleOffersType}-${idOfferType}">
              <span class="event__offer-title">${titleOffersType}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${price}</span>
            </label>
          </div>`).join('')}
        </div>
      </section>`
    );
  }
  return '';
}

function createPhotosEditTemplate(destinationsById) {
  const { pictures } = destinationsById;
  if (pictures.length === 0) {
    return '';
  }
  return (
    `<div class="event__photos-container">
      <div class="event__photos-tape">
      ${pictures.map(({src, description: descriptionPhoto}) => `<img class="event__photo" src="${src}" alt="${descriptionPhoto}">`).join('')}
      </div>
    </div>`
  );
}

function createDestinationEditTemplate(destinationsById) {
  const { description, pictures } = destinationsById;
  if (description.length === 0 && pictures.length === 0) {
    return '';
  }
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${createPhotosEditTemplate(destinationsById)}
    </section>`);
}

function createWaypointsEditTemplate(point, destinations, offersById, offersByType, destinationsById) {
  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${createTypeEditTemplate(point, destinationsById, destinations)}
        ${createDataEditTemplate (point)}
        ${createPriceEditTemplate(point)}
        ${createSaveButtonEditTemplate()}
        ${createDeleteButtonEditTemplate()}
        ${createToggleButtonEditTemplate()}
      </header>
      <section class = "event__details"
        ${createOffersEditTemplate(offersById, offersByType)}
        ${createDestinationEditTemplate(destinationsById)}
      </section>
    </form>
  </li>`;
}


export default class WaypointsEditView extends AbstractView {
  #point = null;
  #destinations = null;
  #destinationsById = null;
  #offersByType = null;
  #offersById = null;
  #handleFormSubmit;

  constructor({point, destinations, offersById, offersByType, destinationsById, onFormSubmit}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offersById = offersById;
    this.#offersByType = offersByType;
    this.#destinationsById = destinationsById;
    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('.event--edit')?.addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formSubmitHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', (evt) => evt.preventDefault());
  }

  get template() {
    return createWaypointsEditTemplate(this.#point, this.#destinations, this.#offersById, this.#offersByType, this.#destinationsById);
  }

  #formSubmitHandler = (e) => {
    e.preventDefault();
    this.#handleFormSubmit(this.#point);
  };
}
