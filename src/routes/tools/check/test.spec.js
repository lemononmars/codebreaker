// @ts-nocheck
// Test suite for Code Breaker Answer Checker Helper functions
import { describe, it, expect } from 'vitest';

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function unmask(s){
  s = s.split('').map((x,index) => {
    return str.charAt( (str.indexOf(x) - index + 64) % 64)
  }).join('');
  return s.replace(/\-/g,'+').replace(/\_/g,'/')
}

function mask(s){
  s = s.replace(/\+/g,'-').replace(/\//g,'_')
  return s.split('').map((x,index) => {
    return str.charAt( (str.indexOf(x) + index) % 64)
  }).join('');
}

function decode(s) {
  if (!s) return '';
  try {
    s = unmask(s)
    const paddingNeeded = (4 - (s.length % 4)) % 4;
    s = s + '='.repeat(paddingNeeded);
    return decodeURIComponent(atob(s).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  } catch (e) {
    return '';
  }
}

function encode(s) {
  if (!s) return '';
  try {
    s = btoa(encodeURIComponent(s).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
      }));
    s = s.replace(/=/g, '');
    return mask(s)
  } catch (e) {
    return '';
  }
}

// Global browser context shims for NodeJS environment
if (typeof btoa === 'undefined') {
  global.btoa = (str) => Buffer.from(str, 'binary').toString('base64');
}
if (typeof atob === 'undefined') {
  global.atob = (b64) => Buffer.from(b64, 'base64').toString('binary');
}

describe('Answer Checker Helper', () => {
  const testCases = [
    { name: 'Single character English', input: 'A' },
    { name: 'Single character Thai', input: 'ก' },
    { name: 'Mixed English and Thai', input: 'กabC' },
    { name: 'English words with spaces', input: 'Hello World' },
    { name: 'Long mixed phrase', input: 'ปริศนา 123 abc' },
  ];

  it('performs roundtrip encoding/decoding correctly', () => {
    testCases.forEach((tc) => {
      const encoded = encode(tc.input);
      const decoded = decode(encoded);
      expect(decoded).toBe(tc.input);
    });
  });

  it('handles case-insensitive comparison', () => {
    const answer = 'abC';
    const encodedAnswer = encode(answer.toUpperCase()); // As implemented in builder: ABC
    const userGuess1 = 'abc';
    const userGuess2 = 'ABC';
    const userGuess3 = 'aBc';

    const decoded = decode(encodedAnswer); // ABC

    expect(userGuess1.trim().toUpperCase()).toBe(decoded.toUpperCase());
    expect(userGuess2.trim().toUpperCase()).toBe(decoded.toUpperCase());
    expect(userGuess3.trim().toUpperCase()).toBe(decoded.toUpperCase());
  });

  it('provides safety guards against falsy values', () => {
    expect(encode(undefined)).toBe('');
    expect(encode(null)).toBe('');
    expect(encode('')).toBe('');
    expect(decode(undefined)).toBe('');
    expect(decode(null)).toBe('');
    expect(decode('')).toBe('');
  });
});
