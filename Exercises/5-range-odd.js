'use strict';

const rangeOdd = (begin, end) => {
  const mas = [];
  for (begin; begin <= end; begin++) {
    mas.push(begin);
  }
  return mas.filter((elem) => (elem % 2));
};

module.exports = { rangeOdd };
