'use strict';

const fn = () => {
  const obj1 = { name: 'Ben' };
  let obj2 = { name: 'Bom' };

  obj1.name = 'Angelin';
  obj2.name = 'Delina';

  obj2 = { name: 'Marcus Aurelius' };
};

module.exports = { fn };