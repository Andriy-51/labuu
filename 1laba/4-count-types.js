'use strict';

const countTypesInArray = (ad) => {
  const counters = {};
  for (const element of ad) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };