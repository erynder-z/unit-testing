const calculator = require('./calculator');

test('add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test('divide two numbers', () => {
  expect(calculator.divide(18, 6)).toBe(3);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
