'use strict';

const range = (begin, end) => {
  const mas = [];
  for (begin; begin <= end; begin++) {
    mas.push(begin);
  }
  return mas;
};

module.exports = { range };
