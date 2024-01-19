import PointsModel from './model/points-model.js';
import TripPresenter from './presenter/trip-presenter.js';

const siteFilterElement = document.querySelector('.trip-main__trip-controls');
const siteMainElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripEventsPresenter = new TripPresenter({
  headerContainer: siteFilterElement,
  mainContainer: siteMainElement,
  pointsModel,
});

tripEventsPresenter.init();
