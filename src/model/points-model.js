import Observable from '../framework/observable.js';
import { UpdateType } from '../utils/const.js';

export default class PointsModel extends Observable {
  #pointsApiService;
  #points = [];

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get points() {
    return this.#points;
  }

  async init() {
    try {
      const waypoints = await this.pointsApiService.points;
      this.#points = waypoints.map(this.#adaptToClient);
    } catch (err) {
      this.#points = [];
    }

    this._notify(UpdateType.INIT);
  }

  async updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update point');
    }

    try {
      const response = await this.#pointsApiService.updatePoint(update);
      const updatePoint = this.#adaptToClient(response);
      this.#points = [
        ...this.#points.slice(0, index),
        update,
        ...this.#points.slice(index + 1),
      ];
      this._notify(updateType, updatePoint);
    } catch (err) {
      throw new Error('Can\'t update point');
    }
  }

  async addPoint(updateType, update) {
    try {
      const response = await this.#pointsApiService.addPoint(update);
      const newPoint = this.#adaptToClient(response);
      this.#points = [newPoint, ...this.#points];
      this._notify(updateType, newPoint);
    } catch (err) {
      throw new Error('Can\'t add point');
    }
  }

  async deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);
    if (index === -1) {
      throw new Error('Can\'t delete point');
    }

    try {
      await this.#pointsApiService.deletePoint(update);
      this.#points = [
        ...this.#points.slice(0, index),
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType);
    } catch (err) {
      throw new Error('Can\'t delete point');
    }
  }

  #adaptToClient(point) {
    const adaptedPoint = {
      ...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'],
      dateTo: point['date_to'],
      isFavorite: point['is_favorite'],
      offersId: point.offers,
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];
    delete adaptedPoint['offers'];

    return adaptedPoint;
  }


}
