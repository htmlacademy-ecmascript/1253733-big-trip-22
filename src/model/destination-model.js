import Observable from '../framework/observable.js';
import { UpdateType } from '../utils/const.js';

export default class DestinationModel extends Observable {
  #pointsApiService;
  #destinations = [];

  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#pointsApiService.destinations;
    } catch (err) {
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  }

  getDestinationsById(id) {
    const allDestination = this.#destinations;
    return allDestination.find((item) => item.id === id);
  }
}
