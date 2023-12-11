import FilterView from "./view/filter-view.js";
import ButtonNewEvent from "./view/button-new-event-view.js";
import { render } from "./render.js";
import TripPresenter from "./presenter/trip-presenter.js";

const tripMainElement = document.querySelector(".trip-main");
const siteFilterElement = tripMainElement.querySelector(
  ".trip-controls__filters"
);
const tripEventsElement = document.querySelector(".trip-events");
const tripEventsPresenter = new TripPresenter({
  tripContainer: tripEventsElement,
});

render(new FilterView(), siteFilterElement);
render(new ButtonNewEvent(), tripMainElement);

tripEventsPresenter.init();
