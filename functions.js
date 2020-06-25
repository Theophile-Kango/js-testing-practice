export const capitalize = (string) => {
  try {
    string = string.replace(/^./, string[0].toUpperCase());
    return string;
  } catch (message) {
    return 'You must give a string';
  }
};

export const reverseString = (string) => {
  try {
    return string.split('').reverse().join('');
  } catch (message) {
    return 'You must give a string';
  }
};

export class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  add() {
    if (typeof this.number1 !== 'number' || typeof this.number2 !== 'number') {
      return 'This is an error, invalid parameters';
    }

    return this.number1 + this.number2;
  }

  sub() {
    if (typeof this.number1 !== 'number' || typeof this.number2 !== 'number') {
      return 'This is an error, invalid parameters';
    }

    return this.number1 - this.number2;
  }

  mul() {
    if (typeof this.number1 !== 'number' || typeof this.number2 !== 'number') {
      return 'This is an error, invalid parameters';
    }

    return this.number1 * this.number2;
  }

  div() {
    if (typeof this.number1 !== 'number' || typeof this.number2 !== 'number' || this.number2 === 0) {
      return 'This is an error, invalid parameters';
    }

    return this.number1 / this.number2;
  }
}

export const caesar = (string, k) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = alphabet.toUpperCase();
  if (Math.abs(k) >= 26) {
    k %= 26;
  }
  if (k < 0) {
    k = 26 + k;
  }
  string.split('').forEach(element => {
    if (alphabet.includes(element) || alphabetUpper.includes(element)) {
      const index = alphabet.indexOf(element.toLowerCase());
      if (index + k >= 26) {
        k -= 26;
      }
      if (element === element.toUpperCase()) {
        string = string.replace(element, alphabetUpper[index + k]);
      } else {
        string = string.replace(element, alphabet[index + k]);
      }
    }
  });
  return string;
};

export const analyze = (array) => {
  if (typeof array !== 'object') {
    return 'You must give an array';
  }

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return 'You must give an array of numbers only';
    }
  }


  const object = {
    average: array.reduce((prev, current) => prev + current, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
};
