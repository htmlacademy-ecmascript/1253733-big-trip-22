import TripBoardView from "../view/trip-board-view.js";
import SortView from "../view/sort-view.js";
import EventEditView from "../view/event-edit-view.js";
import TripEvenList from "../view/trip-events-list.js";
import TripEventItemView from "../view/trip-event-item-view.js";
import { render } from "../render.js";

export default class TripPresenter {
  tripBoardComponent = new TripBoardView();
  tripEvenListComponent = new TripEvenList();

  constructor({ tripContainer }) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripBoardComponent, this.tripContainer);
    render(new SortView(), this.tripBoardComponent.getElement());
    render(this.tripEvenListComponent, this.tripBoardComponent.getElement());
    render(new EventEditView(), this.tripEvenListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new TripEventItemView(), this.tripEvenListComponent.getElement());
    }
  }
}
