export const capitalize = (string) => {
    try {
        string = string.replace(/^./,string[0].toUpperCase());
        return string;
      }
      catch(message) {
        return "You must give a string";
      }
}

export const reverseString = (string) => {
    try {
        return string.split('').reverse().join('');
      }
      catch(message) {
        return "You must give a string";
      }
}

export class Calculator {
  add(number1, number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
      return 'This is an error, invalid parameters';
    }
    else{
      return number1 + number2;
    }
  }
  sub(number1, number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
      return 'This is an error, invalid parameters';
    }
    else{
      return number1 - number2;
    }
  }
  mul(number1, number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
      return 'This is an error, invalid parameters';
    }
    else{
      return number1 * number2;
    }
  }
  div(number1, number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number' || number2 === 0){
      return 'This is an error, invalid parameters';
    }
    else{
      return number1 / number2;
    }
  }
}
