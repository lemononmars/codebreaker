import { describe, it, expect } from 'vitest';
import { search, splitWord } from './thaiwords';

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

import { appendable } from './thaiwords';

describe('splitWord', () => {
    it('should return an empty array for an empty string', () => {
        expect(splitWord('')).toEqual([]);
    });

    it('should correctly split simple Thai words', () => {
        expect(splitWord('ทำ')).toEqual(['ท', 'ำ']);
        expect(splitWord('ก็')).toEqual(['ก็']);
    });

    it('should correctly split Thai words with vowels/tone marks that attach to consonants', () => {
        expect(splitWord('น้ำ')).toEqual(['น้', 'ำ']);
        expect(splitWord('สวัสดี')).toEqual(['ส', 'วั', 'ส', 'ดี']);
        expect(splitWord('ประเทศไทย')).toEqual(['ป', 'ร', 'ะ', 'เ', 'ท', 'ศ', 'ไ', 'ท', 'ย']);
    });

    it('should correctly handle special characters like dot, asterisk, and slash', () => {
        expect(splitWord('ก.ข*ค/')).toEqual(['ก', '.', 'ข', '*', 'ค', '/']);
    });

    it('should handle english or non-thai characters (which are not supported in the primary regexes) by treating them as undefined in array-like structures without failing', () => {
        // Due to the current logic:
        //   if (a.match(/[ก-ฮ]/) || ...) out.push(a) else out[out.length - 1] += a;
        // Non-Thai strings that begin with a non-matching character will append to out[-1].
        // This test ensures we understand the current behavior.
        const result = splitWord('hello');
        // result length is 0, but it has a '-1' property. We can check the standard array output is empty.
        expect(result.length).toBe(0);
        expect((result as any)['-1']).toBe('undefinedhello');
    });
});

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
