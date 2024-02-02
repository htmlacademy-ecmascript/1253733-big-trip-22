import { v4 as uuidv4 } from 'uuid';
import {getRandomArrayElement} from '../utils.js';
import {POINT_TYPES} from '../const.js';
import {CITIES} from '../const.js';


const destinationsMock = [
  {
    'id': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'description': 'A great place',
    'name': CITIES[0],
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Amsterdam',
      },
    ],
  },
  {
    'id': 'cfe416cq-10xa-ye10-8077-2fs9a01edca09b',
    'description': 'A great place',
    'name': CITIES[1],
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Mosсow',
      },
    ],
  },
  {
    'id': 'cfe416cq-10xa-ye10-8077-2fs9a01edc23',
    'description': 'Amaizine',
    'name': CITIES[2],
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317/45.jpg',
        'description': 'Chamnoix',
      },
    ],
  },
  {
    'id': 'b4c3e4e6-9053-42ce-b747-e281314baa31',
    'description': 'Geneva',
    'name': CITIES[3],
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Geneva',
      },
    ],
  },
];

const offersMock = [
  {
    'type': POINT_TYPES[0],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa10',
        'title': 'Upgrade to a business class',
        'price': 120,
      },
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa11',
        'title': 'Add luggage',
        'price': 150,
      },
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa12',
        'title': 'Switch to comfort class',
        'price': 230,
      },
    ],
  },
  {
    'type': POINT_TYPES[1],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa1',
        'title': 'Choose seats',
        'price': 120,
      },
    ],
  },
  {
    'type': POINT_TYPES[2],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa2',
        'title': 'Rent a car',
        'price': 120,
      },
    ],
  },
  {
    'type': POINT_TYPES[3],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        'title': 'Add luggage',
        'price': 120,
      },
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa4',
        'title': 'Switch to comfort',
        'price': 120,
      },
    ],
  },
  {
    'type': POINT_TYPES[4],
    'offers': [],
  },
  {
    'type': POINT_TYPES[5],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa5',
        'title': 'Add luggage',
        'price': 120,
      },
    ],
  },
  {
    'type': POINT_TYPES[6],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa6',
        'title': 'Add breakfast',
        'price': 120,
      },
    ],
  },
  {
    'type': POINT_TYPES[7],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa7',
        'title': 'Book tickets',
        'price': 300,
      },
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa8',
        'title': 'Lunch in city',
        'price': 30,
      },
    ],
  },
  {
    'type': POINT_TYPES[8],
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa9',
        'title': 'Vegan menu',
        'price': 300,
      },
    ],
  },
];

const mockDate = [
  {
    'date-from': '2023-12-15T06:57:04.116Z',
    'date-to': '2023-12-15T17:50:04.116Z',
    'is-favorite': true,
  },
  {
    'date-from': '2023-12-28T22:42:04.116Z',
    'date-to': '2023-12-30T22:55:04.116Z',
    'is-favorite': true,
  },
  {
    'date-from': '2023-12-15T06:57:04.116Z',
    'date-to': '2023-12-15T17:50:04.116Z',
    'is-favorite': true,
  },
  {
    'date-from': '2024-01-02T23:20:06.925Z',
    'date-to': '2024-01-04T10:17:06.925Z',
    'is-favorite': false,
  },
  {
    'date-from': '2024-02-03T02:48:06.925Z',
    'date-to': '2024-02-04T06:06:06.925Z',
    'is-favorite': true,
  },
  {
    'date-from': '2024-02-12T19:13:06.925Z',
    'date-to': '2024-02-13T13:38:06.925Z',
    'is-favorite': true,
  }
];

function getRandomPoint() {
  const options = getRandomArrayElement(offersMock);
  const date = getRandomArrayElement(mockDate);
  const destination = getRandomArrayElement(destinationsMock);
  const { type, offers } = options;
  const offersId = offers.map((item) => item.id);
  return {
    id: uuidv4(),
    basePrice: 800,
    dateFrom: date['date-from'],
    dateTo: date['date-to'],
    destination: destination.id,
    isFavorite: date['is-favorite'],
    offersId,
    type
  };
}

export {getRandomPoint, destinationsMock, offersMock };
