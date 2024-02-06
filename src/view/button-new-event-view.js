import AbstractView from '../framework/view/abstract-view';

function createNewButtonTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';
}

export default class ButtonNewEvent extends AbstractView {
  #handlerClick;
  constructor ({onClick}) {
    super();
    this.#handlerClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }


  get template() {
    return createNewButtonTemplate();
  }

  #clickHandler = (e) => {
    e.preventDefault();
    this.#handlerClick();
  };
}
