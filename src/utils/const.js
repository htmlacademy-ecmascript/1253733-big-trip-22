const POINT_TYPES = [
  'taxi',
  'bus',
  'flight',
  'train',
  'ship',
  'check-in',
  'sightseeing',
  'restaurant'
];


const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const TextNoEvent = {
  EVERYTHING: 'Click New Event to create your first point',
  PAST: 'There are no past events now',
  PRESENT: 'There are no present events now',
  FUTURE: 'There are no future events now',
};

const UpdateType = {
  PATCH: 'Patch',
  MINOR: 'Minor',
  MAJOR: 'Major'
};

const FilterType = {
  EVERYTHING: 'everything',
  PAST: 'past',
  PRESENT: 'present',
  FUTURE: 'future',
};

const SORTING = ['day', 'event', 'time', 'price', 'offers'];
const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const UserAction = {
  UPDATE_WAYPOINT: 'UpdateWaypoint',
  ADD_WAYPOINT: 'AddWaypoint',
  DELETE_WAYPOINT: 'DeleteWaypoint',
};
const DEFAULT_TYPE = 'flight';
const CITIES = ['Amsterdam','Mosсow', 'Chamonix', 'Geneva'];

export { POINT_TYPES,Mode,TextNoEvent,UpdateType,FilterType, SORTING,SortType,UserAction,DEFAULT_TYPE,CITIES};
