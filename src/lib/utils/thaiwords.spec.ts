import { describe, it, expect } from 'vitest';
import { getFirstLetter } from './thaiwords';

describe('getFirstLetter', () => {
  it('should return the first Thai consonant from a standard Thai word', () => {
    // "แมว" (cat) starts with vowel 'แ', first consonant is 'ม'
    expect(getFirstLetter('แมว')).toBe('ม');

    // "หมา" (dog) starts with 'ห'
    expect(getFirstLetter('หมา')).toBe('ห');

    // "กิน" (eat) starts with 'ก'
    expect(getFirstLetter('กิน')).toBe('ก');
  });

  it('should return empty string if there are no Thai consonants', () => {
    // Empty string
    expect(getFirstLetter('')).toBe('');

    // Only English letters
    expect(getFirstLetter('hello')).toBe('');

    // Numbers and symbols
    expect(getFirstLetter('123!?')).toBe('');

    // Only Thai vowels/tones, no consonants
    expect(getFirstLetter('แเโใไ')).toBe('');
  });

  it('should handle mixed character strings', () => {
    // English then Thai
    expect(getFirstLetter('hiแมว')).toBe('ม');

    // Thai then English
    expect(getFirstLetter('แมวhi')).toBe('ม');

    // Numbers then Thai
    expect(getFirstLetter('123แมว')).toBe('ม');
  });

  it('should correctly handle edge cases', () => {
    // String with whitespace
    expect(getFirstLetter('   แมว')).toBe('ม');

    // Only spaces
    expect(getFirstLetter('   ')).toBe('');
  });
});
