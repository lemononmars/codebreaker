import { describe, it, expect, vi, afterEach } from 'vitest';
import { todayDateThaiString, dateToThaiString } from './date.js';

describe('Date Utilities', () => {
  describe('dateToThaiString', () => {
    it('converts date correctly', () => {
      expect(dateToThaiString('2023-01-01T12:00:00Z')).toBe('1 มกราคม 2023');
    });
  });

  describe('todayDateThaiString', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('returns standard date (Jan 1, 2023 12:00 UTC -> 19:00 BKK)', () => {
      vi.spyOn(Date, 'now').mockReturnValue(new Date('2023-01-01T12:00:00Z').getTime());
      expect(todayDateThaiString()).toBe('1 มกราคม 2023');
    });

    it('handles date boundary correctly (Jan 1, 2023 20:00 UTC -> Jan 2, 03:00 BKK)', () => {
      vi.spyOn(Date, 'now').mockReturnValue(new Date('2023-01-01T20:00:00Z').getTime());
      expect(todayDateThaiString()).toBe('2 มกราคม 2023');
    });

    it('handles leap year (Feb 28, 2024 20:00 UTC -> Feb 29 BKK)', () => {
      vi.spyOn(Date, 'now').mockReturnValue(new Date('2024-02-28T20:00:00Z').getTime());
      expect(todayDateThaiString()).toBe('29 กุมภาพันธ์ 2024');
    });

    it('returns string with extra space for April', () => {
      vi.spyOn(Date, 'now').mockReturnValue(new Date('2023-04-10T12:00:00Z').getTime());
      expect(todayDateThaiString()).toBe('10  เมษายน 2023');
    });
  });
});
