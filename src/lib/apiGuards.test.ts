import { describe, it, expect } from 'vitest';
import {
	PUZZLE_TABLES,
	PUBLIC_TABLES,
	PUBLIC_INSERT_TABLES,
	isAllowedTable,
	publicError
} from './apiGuards';

describe('apiGuards', () => {
	describe('constants', () => {
		it('PUZZLE_TABLES should contain specific tables', () => {
			expect(PUZZLE_TABLES.has('crossword')).toBe(true);
			expect(PUZZLE_TABLES.has('weekly')).toBe(true);
			expect(PUZZLE_TABLES.has('nonexistent')).toBe(false);
			expect(PUZZLE_TABLES.size).toBeGreaterThan(0);
		});

		it('PUBLIC_TABLES should include PUZZLE_TABLES and leaderboard', () => {
			expect(PUBLIC_TABLES.has('leaderboard')).toBe(true);
			expect(PUBLIC_TABLES.has('crossword')).toBe(true);
			expect(PUBLIC_TABLES.has('nonexistent')).toBe(false);
			expect(PUBLIC_TABLES.size).toBe(PUZZLE_TABLES.size + 1);
		});

		it('PUBLIC_INSERT_TABLES should contain specific tables', () => {
			expect(PUBLIC_INSERT_TABLES.has('crossword')).toBe(true);
			expect(PUBLIC_INSERT_TABLES.has('wordsearch')).toBe(true);
			expect(PUBLIC_INSERT_TABLES.has('leaderboard')).toBe(true);
			expect(PUBLIC_INSERT_TABLES.has('alphabet')).toBe(false);
		});
	});

	describe('isAllowedTable', () => {
		it('should return true if table is in the allowed set', () => {
			const allowed = new Set(['table1', 'table2']);
			expect(isAllowedTable('table1', allowed)).toBe(true);
			expect(isAllowedTable('table2', allowed)).toBe(true);
		});

		it('should return false if table is not in the allowed set', () => {
			const allowed = new Set(['table1', 'table2']);
			expect(isAllowedTable('table3', allowed)).toBe(false);
			expect(isAllowedTable('', allowed)).toBe(false);
		});

		it('should return false for empty set', () => {
			const allowed = new Set<string>();
			expect(isAllowedTable('table1', allowed)).toBe(false);
		});
	});

	describe('publicError', () => {
		it('should return default error response when no arguments are provided', () => {
			const result = publicError();
			expect(result).toEqual({
				status: 500,
				headers: { 'Content-Type': 'application/json' },
				body: { error: 'Internal server error' }
			});
		});

		it('should return custom error response when arguments are provided', () => {
			const result = publicError(404, 'Not found');
			expect(result).toEqual({
				status: 404,
				headers: { 'Content-Type': 'application/json' },
				body: { error: 'Not found' }
			});
		});

		it('should return custom error response when only status is provided', () => {
			const result = publicError(403);
			expect(result).toEqual({
				status: 403,
				headers: { 'Content-Type': 'application/json' },
				body: { error: 'Internal server error' }
			});
		});
	});
});
