import dayjs from 'dayjs';

const DATA_FORMAT = 'DD-MM-YY';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeDataPoints(dataPoint) {
  return dataPoint ? dayjs(dataPoint).format(DATA_FORMAT) : '';
}

export { getRandomArrayElement, humanizeDataPoints };
