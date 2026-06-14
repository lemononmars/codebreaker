import { describe, it, expect } from 'vitest';
import { isUpper, isLower, isMiddle, isTall } from './thaiwords';

describe('thaiwords utility functions', () => {
    describe('isUpper', () => {
        it('should return true for upper characters (vowels and tone marks)', () => {
            // Test with a sample of upper characters matches regex /[\u0E31\u0E34-\u0E37\u0E47-\u0E4C`]/
            expect(isUpper('ั')).toBe(true); // \u0E31
            expect(isUpper('ิ')).toBe(true); // \u0E34
            expect(isUpper('ี')).toBe(true); // \u0E35
            expect(isUpper('ึ')).toBe(true); // \u0E36
            expect(isUpper('ื')).toBe(true); // \u0E37
            expect(isUpper('็')).toBe(true); // \u0E47
            expect(isUpper('่')).toBe(true); // \u0E48
            expect(isUpper('้')).toBe(true); // \u0E49
            expect(isUpper('๊')).toBe(true); // \u0E4A
            expect(isUpper('๋')).toBe(true); // \u0E4B
            expect(isUpper('์')).toBe(true); // \u0E4C
        });

        it('should return false for non-upper characters', () => {
            expect(isUpper('ก')).toBe(false); // consonant
            expect(isUpper('า')).toBe(false); // middle vowel
            expect(isUpper('ุ')).toBe(false); // lower vowel
            expect(isUpper('โ')).toBe(false); // tall vowel
            expect(isUpper('a')).toBe(false); // English letter
        });
    });

    describe('isLower', () => {
        it('should return true for lower characters (vowels)', () => {
            // Matches regex /[\u0E38-\u0E39]/
            expect(isLower('ุ')).toBe(true); // \u0E38
            expect(isLower('ู')).toBe(true); // \u0E39
        });

        it('should return false for non-lower characters', () => {
            expect(isLower('ก')).toBe(false); // consonant
            expect(isLower('า')).toBe(false); // middle vowel
            expect(isLower('ิ')).toBe(false); // upper vowel
            expect(isLower('โ')).toBe(false); // tall vowel
            expect(isLower('a')).toBe(false); // English letter
        });
    });

    describe('isMiddle', () => {
        it('should return true for middle characters (consonants and middle vowels/symbols)', () => {
            // Matches /[ก-ฮ]/ or /[ใเแโไาำะๆฯฤา]/
            expect(isMiddle('ก')).toBeTruthy(); // consonant ก
            expect(isMiddle('ฮ')).toBeTruthy(); // consonant ฮ
            expect(isMiddle('เ')).toBeTruthy(); // middle vowel
            expect(isMiddle('แ')).toBeTruthy(); // middle vowel
            expect(isMiddle('า')).toBeTruthy(); // middle vowel
            expect(isMiddle('ะ')).toBeTruthy(); // middle vowel
            expect(isMiddle('ๆ')).toBeTruthy(); // symbol
        });

        it('should return false for non-middle characters', () => {
            expect(isMiddle('ิ')).toBeFalsy(); // upper vowel
            expect(isMiddle('ุ')).toBeFalsy(); // lower vowel
            expect(isMiddle('์')).toBeFalsy(); // tone mark/upper
            expect(isMiddle('a')).toBeFalsy(); // English letter
        });
    });

    describe('isTall', () => {
        it('should return true for tall characters (ใ, ไ, โ)', () => {
            expect(isTall('ใ')).toBe(true);
            expect(isTall('ไ')).toBe(true);
            expect(isTall('โ')).toBe(true);
        });

        it('should return false for non-tall characters', () => {
            expect(isTall('เ')).toBe(false); // middle vowel
            expect(isTall('แ')).toBe(false); // middle vowel
            expect(isTall('ก')).toBe(false); // consonant
            expect(isTall('ิ')).toBe(false); // upper vowel
            expect(isTall('ุ')).toBe(false); // lower vowel
        });
    });
});
