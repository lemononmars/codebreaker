import { describe, it, expect, vi } from 'vitest';
import { getSubWords } from './thaiwords';

// Mock the dictionary so we have a known, small set of words to test against
vi.mock('$lib/utils/dict', () => {
    return {
        // Sample dictionary containing words with and without repeating characters
        default: [
            'ก',
            'กก',
            'กา',
            'กาก',
            'กากา',
            'ข',
            'ขา',
            'แมว',
            'มม',
            'แวว'
        ]
    }
});

describe('getSubWords', () => {
    describe('with allowRepeat = true (default)', () => {
        it('returns all words that can be formed using only the characters in the input word', () => {
            // "กา" contains "ก" and "า"
            // "ก" can form "ก", "กก", "กา", "กาก", "กากา"
            const result = getSubWords('กา', true);
            expect(result).toEqual(['ก', 'กก', 'กา', 'กาก', 'กากา']);
        });

        it('returns empty array if no dictionary word can be formed', () => {
            const result = getSubWords('ฮ', true);
            expect(result).toEqual([]);
        });

        it('returns empty array when input word is empty', () => {
            const result = getSubWords('', true);
            expect(result).toEqual([]);
        });

        it('can use getSubWords with implicit default parameter', () => {
            // Same as first test, but tests the default value of allowRepeat
            const result = getSubWords('กา');
            expect(result).toEqual(['ก', 'กก', 'กา', 'กาก', 'กากา']);
        });
    });

    describe('with allowRepeat = false', () => {
        it('returns only words where characters do not repeat and exist in input pool', () => {
            // With allowRepeat=false, "กก", "กาก", "กากา", "มม", "แวว" are invalid
            // because they contain duplicate letters (ก appears > 1, ม appears > 1, ว appears > 1)
            const result = getSubWords('กามแว', false);
            // "ก", "กา", "แมว" should match
            expect(result).toEqual(['ก', 'กา', 'แมว']);
        });

        it('excludes words that have repeating characters even if input pool has multiple of that character', () => {
            // Even though the input contains two 'ก's, getSubWords with allowRepeat=false
            // explicitly checks if the dictionary word itself has unique characters (new Set(a).size == a.length)
            const result = getSubWords('กกา', false);
            // So "กก" and "กาก" will be excluded
            expect(result).toEqual(['ก', 'กา']);
        });

        it('returns empty array if no dictionary word without repeating characters can be formed', () => {
            const result = getSubWords('ฮ', false);
            expect(result).toEqual([]);
        });

        it('returns empty array when input word is empty', () => {
            const result = getSubWords('', false);
            expect(result).toEqual([]);
        });
    });
});
