import AbstractView from '../framework/view/abstract-view';

function createTripTemplate() {
  return '<section class="trip container"></section>';
}

export default class TripBoardView extends AbstractView {
  get template() {
    return createTripTemplate();
  }
}
