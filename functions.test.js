import { capitalize } from './functions';

test('capitalize',() => {
    expect(capitalize('javascript')).toBe('Javascript');
    expect(capitalize('jest')).not.toBe('jest');
    expect(capitalize(3)).toBe("You must give a string");
})
