import Observable from '../framework/observable.js';
import { offersMock } from '../mock/points.js';


export default class OffersModel extends Observable {
  #offers = offersMock;

  get offers() {
    return this.#offers;
  }

  getOffersByType(type){
    const allOffers = this.offers;
    return allOffers.find((item) => item.type === type);
  }

  getOffersById(type, itemId) {
    const offersByType = this.getOffersByType(type);
    return offersByType.offers.filter((item) => itemId.find((id) => item.id === id));
  }
}
