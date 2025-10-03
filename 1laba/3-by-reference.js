'use strict';

const inc = (daw) => {
  if (typeof daw === 'object') {
    daw.n++;
  }
};

module.exports = { inc };