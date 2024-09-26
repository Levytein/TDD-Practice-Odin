import { reverse } from '../functions/reverse.js';


test('I returned the word reversed', () =>
{
    expect(reverse('taco')).toBe("ocat");
});

test('I returned the word reversed', () =>
{
    expect(reverse('hamburger')).toBe("regrubmah");
});

test('I returned the word reversed', () =>
    {
        expect(reverse('I like cats')).toBe("stac ekil I");
    });