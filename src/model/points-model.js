import { mockPoints } from '../mock/points.js';
import { destinationsMock } from '../mock/destinations.js';
import { offersMock } from '../mock/offers.js';

export default class PointsModel {
  constructor() {
    this.points = [];
    this.destinations = [];
    this.offers = [];
  }

  init() {
    this.points = mockPoints;
    this.destinations = destinationsMock;
    this.offers = offersMock;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
