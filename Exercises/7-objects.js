'use strict';

const fn = () => {
  const obj1 = { name: '' };
  let obj2 = { name: '' };
  obj1.name = 'Misha';
  obj2.name = 'Masha';
  obj2.name = { name: 'Jack for u' };

};

module.exports = { fn };
