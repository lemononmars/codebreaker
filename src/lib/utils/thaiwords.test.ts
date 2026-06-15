import { describe, it, expect } from 'vitest';
import { appendable } from './thaiwords';

describe('appendable', () => {
    it('should allow consonant followed by upper letter', () => {
        // ก (consonant) + ั (upper letter)
        expect(appendable('ก', 'ั')).toBeTruthy();
        expect(appendable('ก', 'ิ')).toBeTruthy();
        expect(appendable('ข', '็')).toBeTruthy();
    });

    it('should allow consonant followed by lower letter', () => {
        // ก (consonant) + ุ (lower letter)
        expect(appendable('ก', 'ุ')).toBeTruthy();
        expect(appendable('ข', 'ู')).toBeTruthy();
    });

    it('should not allow consonant followed by another consonant', () => {
        // ก + ก
        expect(appendable('ก', 'ก')).toBeFalsy();
    });

    it('should not allow consonant followed by a middle vowel/character', () => {
        // ก + า
        expect(appendable('ก', 'า')).toBeFalsy();
        expect(appendable('ก', 'เ')).toBeFalsy();
    });

    it('should not allow non-consonant as first character', () => {
        // า (middle vowel) + ั (upper letter)
        expect(appendable('า', 'ั')).toBeFalsy();
        // English letter + upper letter
        expect(appendable('A', 'ั')).toBeFalsy();
    });

    it('should not allow English letters', () => {
        expect(appendable('a', 'b')).toBeFalsy();
        expect(appendable('ก', 'a')).toBeFalsy();
    });
});
