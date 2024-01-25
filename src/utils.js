import dayjs from 'dayjs';

const DATA_FORMAT = 'DD-MM-YY';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeDataPoints(dataPoint) {
  return dataPoint ? dayjs(dataPoint).format(DATA_FORMAT) : '';
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export { getRandomArrayElement, humanizeDataPoints,updateItem};


