import { cipher } from '../functions/caesarCipher.js';


test('Shifted incorrectly', () =>
{
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Shifted incorrectly', () =>
    {
        expect(cipher('Zyx Bus',10)).toBe('Jih Lec');
    });
