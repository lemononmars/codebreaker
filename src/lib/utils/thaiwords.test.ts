import { describe, it, expect } from 'vitest';
import { search } from './thaiwords';

describe('search', () => {
    it('should return true for words present in the dictionary', () => {
        expect(search('ก็')).toBe(true);
        expect(search('กก')).toBe(true);
        expect(search('ก๊ก')).toBe(true);
    });

    it('should return false for words not present in the dictionary', () => {
        expect(search('not-a-thai-word')).toBe(false);
        expect(search('สวัสดีครับบ')).toBe(false); // misspelled or just not in standard dict
    });

    it('should return false for empty strings', () => {
        expect(search('')).toBe(false);
    });
});
