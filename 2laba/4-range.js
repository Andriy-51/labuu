'use strict';

const range = (begin, end) => {
  const len = end - begin;
  if (len < 1) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = begin; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};

module.exports = { range };