import Observable from '../framework/observable.js';
import { UpdateType } from '../utils/const.js';


export default class OffersModel extends Observable {
  #pointsApiService;
  #offers = [];

  constructor ({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get offers() {
    return this.#offers;
  }

  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
      this._notify(UpdateType.INIT);
    } catch (err) {
      this.#offers = [];
      this._notify(UpdateType.ERROR);
    }
  }

  getOffersByType(type) {
    const allOffers = this.#offers;
    return allOffers.find((offer) => offer.type === type);
  }

  getOffersById(type, itemsId = ['']) {
    const offersByType = this.getOffersByType(type);
    return offersByType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }
}
