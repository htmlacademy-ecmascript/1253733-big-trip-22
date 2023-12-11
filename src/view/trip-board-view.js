import { createElement } from "../render.js";

function createTripTemplate() {
  return '<section class="trip container"></section>';
}

export default class TripBoardView {
  getTemplate() {
    return createTripTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
