import { capitalize, reverseString, Calculator } from './functions';

test('capitalize',() => {
    expect(capitalize('javascript')).toBe('Javascript');
    expect(capitalize('jest')).not.toBe('jest');
    expect(capitalize(3)).toBe("You must give a string");
})

test('reverseString',() => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('jest')).not.toBe('jest');
    expect(reverseString(3)).toBe("You must give a string");
})

test('calculator', () => {
    const calculator = new Calculator;
    expect(calculator.add(1, 3)).toBe(4);
    expect(calculator.sub(3, 1)).toBe(2);
    expect(calculator.mul(4, 3)).toBe(12);
    expect(calculator.div(15, 5)).toBe(3);
    expect(calculator.div(15, 0)).toBe('This is an error, invalid parameters');
    expect(calculator.sub('Hello', 0)).toBe('This is an error, invalid parameters');
    expect(calculator.mul([1, 'yay'], 0)).toBe('This is an error, invalid parameters');
})
