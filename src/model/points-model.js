import { getRandomPoint } from '../mock/points.js';
import { destinationsMock } from '../mock/points.js';
import { offersMock } from '../mock/points.js';

const WAYPOINT_COUNT = 2;

export default class PointsModel {
  #points = Array.from({ length: WAYPOINT_COUNT }, getRandomPoint);
  #destinations = destinationsMock;
  #offers = offersMock;

  get points() {
    return structuredClone(this.#points);
  }

  get destinations() {
    return structuredClone(this.#destinations);
  }

  get offers() {
    return structuredClone(this.#offers);
  }

  getOffersByType(type){
    const allOffers = this.offers;
    return allOffers.find((item) => item.type === type);
  }

  getOffersById(type, itemId) {
    const offersByType = this.getOffersByType(type);
    return offersByType.offers.filter((item) => itemId.find((id) => item.id === id));
  }

  getDestinationById(id) {
    const allDestinations = this.destinations;
    return allDestinations.find((item)=> item.id === id);
  }
}