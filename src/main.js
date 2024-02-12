import WaypointModel from './model/waypoint-model.js';
import DestinationModel from './model/destination-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './points-api-server.js';
import {render, RenderPosition} from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';
import ButtonNewEvent from './view/button-new-event-view.js';

const AUTHORIZATION = 'Basic tyukklko878980909';
const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';

const siteFilterElement = document.querySelector('.trip-main__trip-controls');
const siteMainElement = document.querySelector('.trip-events');

const waypointModel = new WaypointModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const destinationModel = new DestinationModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const offersModel = new OffersModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();

const newEventButtonComponent = new ButtonNewEvent({
  onClick: handleNewEventButtonClick
});


const tripEventsPresenter = new TripPresenter({
  headerContainer: siteFilterElement,
  mainContainer: siteMainElement,
  waypointModel,
  destinationModel,
  offersModel,
  filterModel,
  onNewEventClose: handleNewEventFormClose,
  newEventButtonComponent
});


function handleNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  tripEventsPresenter.createNewWaypoint();
  newEventButtonComponent.element.disabled = true;
}

destinationModel.init().then(() => offersModel.init()).then(() => waypointModel.init()).finally(() => {
  render(newEventButtonComponent, siteFilterElement, RenderPosition.AFTEREND);
});

tripEventsPresenter.init();
