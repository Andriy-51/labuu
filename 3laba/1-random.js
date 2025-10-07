"use strict";
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
  };
console.log(random(3, 8));
console.log(random(11));
module.exports = { random };