import { describe, it, expect } from 'vitest';
import { wordLength } from './thaiwords';

describe('wordLength', () => {
  it('calculates the length of simple Thai words without marks', () => {
    expect(wordLength('คน')).toBe(2);
    expect(wordLength('แมว')).toBe(3);
    expect(wordLength('หมา')).toBe(3);
  });

  it('calculates the length of Thai words with vowels and tone marks correctly', () => {
    // 'ที่' has 'ท' + 'ี' + '่', 'ี' and '่' are removed, length is 1 ('ท')
    expect(wordLength('ที่')).toBe(1);
    // 'บ้าน' has 'บ' + '้' + 'า' + 'น', '้' is removed, length is 3 ('บ', 'า', 'น')
    expect(wordLength('บ้าน')).toBe(3);
    // 'น้ำ' has 'น' + '้' + 'ำ', '้' is removed, length is 2 ('น', 'ำ')
    expect(wordLength('น้ำ')).toBe(2);
    // 'เป็ด' has 'เ' + 'ป' + '็' + 'ด', '็' is removed, length is 3 ('เ', 'ป', 'ด')
    expect(wordLength('เป็ด')).toBe(3);
  });

  it('handles empty string', () => {
    expect(wordLength('')).toBe(0);
  });

  it('handles English words correctly', () => {
    expect(wordLength('hello')).toBe(5);
  });
});
