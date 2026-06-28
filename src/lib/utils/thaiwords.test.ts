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
