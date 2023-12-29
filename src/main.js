import FilterView from "./view/filter-view.js";
import ButtonNewEvent from "./view/button-new-event-view.js";
import PointsModel from "./model/points-model.js";
import { render } from "./render.js";
import TripPresenter from "./presenter/trip-presenter.js";

const tripMainElement = document.querySelector(".trip-main");
const siteFilterElement = tripMainElement.querySelector(
  ".trip-controls__filters"
);
const tripEventsElement = document.querySelector(".trip-events");
const pointsModel = new PointsModel();
pointsModel.init();
const tripEventsPresenter = new TripPresenter({
  tripContainer: tripEventsElement,
  pointsModel,
});

render(new FilterView(), siteFilterElement);
render(new ButtonNewEvent(), tripMainElement);

tripEventsPresenter.init();
