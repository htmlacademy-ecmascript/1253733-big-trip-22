import { SORTING } from './const.js';

function generateSorting(sortType) {
  return SORTING.map((value) => ({
    value,
    isSelected: value === sortType,
    isDisabled: value === 'event' || value === 'offers',
  }));
}

export { generateSorting };
