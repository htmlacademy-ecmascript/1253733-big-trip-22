import Observable from '../framework/observable.js';
import {destinationsMock} from '../mock/points.js';


export default class DestinationModel extends Observable {
  #destinations = destinationsMock;

  get destinations () {
    return this.#destinations;
  }

  getDestinationById(id) {
    const allDestinations = this.destinations;
    return allDestinations.find((item)=> item.id === id);
  }
}
