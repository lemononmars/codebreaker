import { describe, it, expect } from 'vitest';
import { dateToThaiString } from './date';

describe('dateToThaiString', () => {
    it('should correctly format typical dates', () => {
        expect(dateToThaiString('2023-01-15')).toBe('15 มกราคม 2023');
        expect(dateToThaiString('2024-06-30')).toBe('30 มิถุนายน 2024');
    });

    it('should correctly handle boundary months (January and December)', () => {
        expect(dateToThaiString('2023-01-01')).toBe('1 มกราคม 2023');
        expect(dateToThaiString('2023-12-31')).toBe('31 ธันวาคม 2023');
    });

    it('should correctly parse single-digit and double-digit days/months', () => {
        expect(dateToThaiString('2023-04-05')).toBe('5 เมษายน 2023');
        expect(dateToThaiString('2023-10-10')).toBe('10 ตุลาคม 2023');
    });

    it('should correctly format standard ISO strings (YYYY-MM-DD)', () => {
        const isoString = new Date('2023-08-25T10:00:00Z').toISOString().split('T')[0];
        expect(dateToThaiString(isoString)).toBe('25 สิงหาคม 2023');
    });
});
