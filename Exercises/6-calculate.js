'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const mas = [];
  for (let i = 0; i < 10; i++) {
    const iSquare = square(i);
    const iCube = cube(i);
    mas.push(average(iSquare, iCube));
  }
  return mas;
};

module.exports = { square, cube, average, calculate };
