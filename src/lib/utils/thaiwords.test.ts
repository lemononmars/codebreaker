import { describe, it, expect } from 'vitest';
import { isLegal } from './thaiwords';

describe('isLegal', () => {
    it('returns true for single valid Thai characters', () => {
        expect(isLegal('ก')).toBe(true);
        expect(isLegal('ฮ')).toBe(true);
        expect(isLegal('ะ')).toBe(true);
        expect(isLegal('า')).toBe(true);
        expect(isLegal('\u0E00')).toBe(true);
        expect(isLegal('\u0E4C')).toBe(true);
    });

    it('returns false for multiple characters', () => {
        expect(isLegal('กา')).toBe(false);
        expect(isLegal('กก')).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(isLegal('')).toBe(false);
    });

    it('returns false for single non-Thai characters', () => {
        expect(isLegal('A')).toBe(false);
        expect(isLegal('a')).toBe(false);
        expect(isLegal('1')).toBe(false);
        expect(isLegal(' ')).toBe(false);
        expect(isLegal('.')).toBe(false);
        expect(isLegal('!')).toBe(false);
    });

    it('returns false for multiple non-Thai characters', () => {
        expect(isLegal('AB')).toBe(false);
        expect(isLegal('12')).toBe(false);
    });
});
