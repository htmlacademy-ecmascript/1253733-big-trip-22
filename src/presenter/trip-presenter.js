import TripBoardView from '../view/trip-board-view.js';
import SortView from '../view/sort-view.js';
import EventEditView from '../view/event-edit-view.js';
import TripEvenList from '../view/trip-events-list.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  tripBoardComponent = new TripBoardView();
  tripEvenListComponent = new TripEvenList();

  constructor({ tripContainer, pointsModel }) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    const points = this.pointsModel.getPoints();
    const offers = this.pointsModel.getOffers();
    const destinations = this.pointsModel.getDestinations();

    render(this.tripBoardComponent, this.tripContainer);
    render(new SortView(), this.tripBoardComponent.getElement());
    render(this.tripEvenListComponent, this.tripBoardComponent.getElement());
    render(
      new EventEditView(points[0], destinations, offers),
      this.tripEvenListComponent.getElement()
    );
    for (const point of points) {
      render(
        new TripEventItemView(point, destinations, offers),
        this.tripEvenListComponent.getElement()
      );
    }
  }
}
