import AbstractView from '../framework/view/abstract-view.js';

function createWaypointDataTemplate() {
  return ('<time class="event__date" datetime="2019-03-18">MAR 18</time>');
}

function createWaypointTypeEventTemplate (point, destinationsById) {
  const {type} = point;
  const {name} = destinationsById;
  return (`<div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${name}</h3>`);
}

function createWaypointScheduleTemplate (point) {
  const {dateFrom, dateTo} = point;
  return (`<div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="2019-03-18T10:30">${dateFrom}</time>&mdash;
      <time class="event__end-time" datetime="2019-03-18T11:00">${dateTo}</time>
    </p>
    <p class="event__duration">30M</p>
  </div>`);
}

function createWaypointPriceTemplate (point) {
  const {basePrice} = point;
  return (`<p class="event__price">&euro;&nbsp;<span class="event__price-value">${basePrice}</span></p>`);
}

function createWaypointOffersTemplate (offersById) {
  return (`<h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offersById.map(({title, price}) => `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
      </li>`).join('')}
    </ul>`);
}

function createWaypointFavoriteBtnTemplate(point) {
  const {isFavorite} = point;
  return(`<button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>`);
}

function createWaypointRollupBtnTemplate() {
  return(`<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>`);
}

function createWaypointTemplate (point, destinationsById, offersById) {
  return(`
  <li class="trip-events__item">
    <div class="event">
    ${createWaypointDataTemplate()}
    ${createWaypointTypeEventTemplate(point,destinationsById)}
    ${createWaypointScheduleTemplate(point)}
    ${createWaypointPriceTemplate(point)}
    ${createWaypointOffersTemplate(offersById)}
    ${createWaypointFavoriteBtnTemplate(point)}
    ${createWaypointRollupBtnTemplate()}
    </div>
  </li>`);
}

export default class Waypoint extends AbstractView {
  #point;
  #destinationsById;
  #offersById;
  #handlerEditClick;
  #handlerFavoriteClick;


  constructor({point, destinationsById, offersById, onFavoriteClick, onEditClick}) {
    super();
    this.#point = point;
    this.#destinationsById = destinationsById;
    this.#offersById = offersById;
    this.#handlerFavoriteClick = onFavoriteClick;
    this.#handlerEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);

  }

  get template() {
    return createWaypointTemplate(
      this.#point,
      this.#destinationsById,
      this.#offersById
    );
  }

  #editClickHandler = (e) =>{
    e.preventDefault();
    this.#handlerEditClick();
  };

  #favoriteClickHandler = (e)=>{
    e.preventDefault();
    this.#handlerFavoriteClick();
  };
}
