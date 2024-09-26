import { capitalize } from '../functions/capital.js';


test('I did not return the word with the first letter capitalized', () =>
{
    expect(capitalize('taco')).toBe("Taco");
});

test('I did not return the word with the first letter capitalized', () =>
{
    expect(capitalize('yaaaaaaaaaaaaay')).toBe("Yaaaaaaaaaaaaay");
});

test('I did not return the word with the first letter capitalized', () =>
    {
        expect(capitalize('test i like cats')).toBe("Test i like cats");
    });

test('I did not return the word with the first letter capitalized', () =>
{
            expect(capitalize('1')).toBe("1");
});