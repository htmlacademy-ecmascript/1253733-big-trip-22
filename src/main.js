import PointsModel from './model/points-model.js';
import DestinationModel from './model/destination-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import ButtonNewEvent from './view/button-new-event-view.js';
import {render, RenderPosition} from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';

const siteFilterElement = document.querySelector('.trip-main__trip-controls');
const siteMainElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const destinationModel = new DestinationModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();
const tripEventsPresenter = new TripPresenter({
  headerContainer: siteFilterElement,
  mainContainer: siteMainElement,
  pointsModel,
  destinationModel,
  offersModel,
  filterModel,
  onNewEventClose: handleNewPointFormClose
});

const newEventButtonComponent = new ButtonNewEvent({
  onClick: handleNewEventButtonClick
});

function handleNewPointFormClose () {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick () {
  tripEventsPresenter.createNewWaypoint();
  newEventButtonComponent.element.disabled = true;
}

render(newEventButtonComponent, siteFilterElement, RenderPosition.AFTEREND);

tripEventsPresenter.init();
