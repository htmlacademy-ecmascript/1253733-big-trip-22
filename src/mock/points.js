import { v4 as uuidv4 } from 'uuid';
import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edc23',
    basePrice: 1000,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offersId: [
      'b4c3e4e6-9053-42ce-b747-e281314baa10',
      'b4c3e4e6-9053-42ce-b747-e281314baa11',
      'b4c3e4e6-9053-42ce-b747-e281314baa12',
    ],
    type: 'taxi',
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edpoo',
    basePrice: 800,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offersId: ['b4c3e4e6-9053-42ce-b747-e281314baa1'],
    type: 'bus',
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edc29',
    basePrice: 700,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca09b',
    isFavorite: false,
    offersId: ['b4c3e4e6-9053-42ce-b747-e281314baa2'],
    type: 'drive',
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edc28',
    basePrice: 700,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edc23',
    isFavorite: true,
    offersId: [
      'b4c3e4e6-9053-42ce-b747-e281314baa3',
      'b4c3e4e6-9053-42ce-b747-e281314baa4',
    ],
    type: 'flight',
  },
];

function getRandomPoint() {
  return {
    pointId: uuidv4(),
    ...getRandomArrayElement(mockPoints)
  };
}

export {getRandomPoint};
