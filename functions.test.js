import {
  capitalize, reverseString, Calculator, caesar, analyze,
} from './functions';

test('capitalize', () => {
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('jest')).not.toBe('jest');
  expect(capitalize(3)).toBe('You must give a string');
});

test('reverseString', () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('jest')).not.toBe('jest');
  expect(reverseString(3)).toBe('You must give a string');
});

test('calculator', () => {
  let calculator = new Calculator(1, 3);
  expect(calculator.add()).toBe(4);
  calculator = new Calculator(3, 1);
  expect(calculator.sub()).toBe(2);
  calculator = new Calculator(4, 3);
  expect(calculator.mul()).toBe(12);
  calculator = new Calculator(15, 5);
  expect(calculator.div()).toBe(3);
  calculator = new Calculator(15, 0);
  expect(calculator.div(15, 0)).toBe('This is an error, invalid parameters');
  calculator = new Calculator('Hello', 0);
  expect(calculator.sub()).toBe('This is an error, invalid parameters');
  calculator = new Calculator([1, 'yay']);
  expect(calculator.mul()).toBe('This is an error, invalid parameters');
});

test('Caesar Cipher', () => {
  expect(caesar('Hello', 1)).toBe('Ifmmp');
  expect(caesar('HeLlO', 10)).toBe('RoVvY');
  expect(caesar('H.e,l.l,o', 26)).toBe('H.e,l.l,o');
  expect(caesar('Hello', 10011)).toBe('Ifmmp');
  expect(caesar('HeLlO', -16)).toBe('RoVvY');
});

test('Analyze', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
  expect(analyze([1, 'p', 5])).toBe('You must give an array of numbers only');
  expect(analyze([5])).toEqual({
    average: 5, min: 5, max: 5, length: 1,
  });
  expect(analyze(5)).toBe('You must give an array');
});