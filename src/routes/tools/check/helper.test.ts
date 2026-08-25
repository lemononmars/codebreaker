import { describe, it, expect, vi } from 'vitest';
import { encode, decode } from './helper';

describe('Answer Checker Helper', () => {
	describe('Roundtrip Encoding & Decoding', () => {
		const testCases = [
			{ name: 'Single character English', input: 'A' },
			{ name: 'Single character Thai', input: 'ก' },
			{ name: 'Mixed English and Thai', input: 'กabC' },
			{ name: 'English words with spaces', input: 'Hello World' },
			{ name: 'Long mixed phrase', input: 'ปริศนา 123 abc' }
		];

		testCases.forEach((tc) => {
			it(`should roundtrip successfully for ${tc.name}`, () => {
				const encoded = encode(tc.input);
				const decoded = decode(encoded);
				expect(decoded).toBe(tc.input);
			});
		});
	});

	describe('Case-Insensitive Verification', () => {
		it('case-insensitive matching works against encoded value', () => {
			const answer = 'abC';
			const encodedAnswer = encode(answer.toUpperCase()); // As implemented in builder: ABC

			const userGuess1 = 'abc';
			const userGuess2 = 'ABC';
			const userGuess3 = 'aBc';

			const decoded = decode(encodedAnswer);

			expect(userGuess1.trim().toUpperCase()).toBe(decoded.toUpperCase());
			expect(userGuess2.trim().toUpperCase()).toBe(decoded.toUpperCase());
			expect(userGuess3.trim().toUpperCase()).toBe(decoded.toUpperCase());
		});
	});

	describe('Safety guards against falsy values', () => {
		it('encode handles undefined, null, empty string', () => {
			// @ts-expect-error test invalid inputs
			expect(encode(undefined)).toBe('');
			// @ts-expect-error test invalid inputs
			expect(encode(null)).toBe('');
			expect(encode('')).toBe('');
		});

		it('decode handles undefined, null, empty string', () => {
			// @ts-expect-error test invalid inputs
			expect(decode(undefined)).toBe('');
			// @ts-expect-error test invalid inputs
			expect(decode(null)).toBe('');
			expect(decode('')).toBe('');
		});
	});

	describe('Error handling', () => {
		it('decode should catch errors and return empty string on invalid base64/URI encoding', () => {
			// Suppress console.error in tests
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {
				// do nothing
			});

			// "%%" is an invalid URI component, so decodeURIComponent will throw
			// This happens after it attempts to process base64 strings
			// By giving "%%", unmask will return something that gets parsed as base64,
			// and decodeURIComponent will fail.
			const result = decode('%%');
			expect(result).toBe('');
			expect(consoleSpy).toHaveBeenCalled();

			consoleSpy.mockRestore();
		});

		it('encode should catch errors and return empty string if btoa/encodeURIComponent fails', () => {
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {
				// do nothing
			});

			// Mock btoa to throw an error to test the catch block
			const originalBtoa = global.btoa;
			global.btoa = vi.fn().mockImplementation(() => {
				throw new Error('Mocked encode error');
			});

			const result = encode('test');
			expect(result).toBe('');
			expect(consoleSpy).toHaveBeenCalled();

			// Restore btoa
			global.btoa = originalBtoa;
			consoleSpy.mockRestore();
		});
	});
});
