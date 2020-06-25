import { capitalize, reverseString } from './functions';

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