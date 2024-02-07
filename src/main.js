import PointsModel from './model/points-model.js';
import DestinationModel from './model/destination-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './points-api-server.js';
import ButtonNewEvent from './view/button-new-event-view.js';
import {render, RenderPosition} from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';

const AUTHORIZATION = 'Basic eo0w590ik78664R5';
const END_POINT = 'https://21.objects.pages.academy/big-trip';

const siteFilterElement = document.querySelector('.trip-main__trip-controls');
const siteMainElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const destinationModel = new DestinationModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const offersModel = new OffersModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
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

destinationModel.init().then(() => offersModel.init()).then(() => pointsModel.init()).finally(() => {
  render(newEventButtonComponent, siteFilterElement, RenderPosition.AFTEREND);
});

tripEventsPresenter.init();
