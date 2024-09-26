import { calculator } from '../functions/calculator.js';


test('I added incorrectly', () =>
{
    expect(calculator.add(1,2)).toBe(3);
});

test('I subtracted incorrectly', () =>
{
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('I divided incorrectly', () =>
    {
        expect(calculator.divide(2,2)).toBe(1);
    });
    
test('I multiplied incorrectly', () =>
{
            expect(calculator.multiply(2,2)).toBe(4);
});