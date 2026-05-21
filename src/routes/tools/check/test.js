// Test suite for Code Breaker Answer Checker Helper functions
import assert from 'assert';

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

const testCases = [
  { name: 'Single character English', input: 'A' },
  { name: 'Single character Thai', input: 'ก' },
  { name: 'Mixed English and Thai', input: 'กabC' },
  { name: 'English words with spaces', input: 'Hello World' },
  { name: 'Long mixed phrase', input: 'ปริศนา 123 abc' },
];

console.log('🧪 Starting Answer Checker Test Suite...\n');

let passed = 0;
let failed = 0;

// Test 1: Roundtrip encoding/decoding
console.log('--- Test Category: Roundtrip Encoding & Decoding ---');
testCases.forEach((tc) => {
  try {
    const encoded = encode(tc.input);
    const decoded = decode(encoded);
    assert.strictEqual(decoded, tc.input);
    console.log(`\u001b[32m✅ Passed\u001b[0m: [${tc.name}] - Input: "${tc.input}" -> Encoded: "${encoded}" -> Decoded: "${decoded}"`);
    passed++;
  } catch (e) {
    console.error(`\u001b[31m❌ Failed\u001b[0m: [${tc.name}] - ${e.message}`);
    failed++;
  }
});

// Test 2: Case-insensitive comparison
console.log('\n--- Test Category: Case-Insensitive Verification ---');
try {
  const answer = 'abC';
  const encodedAnswer = encode(answer.toUpperCase()); // As implemented in builder: ABC
  const userGuess1 = 'abc';
  const userGuess2 = 'ABC';
  const userGuess3 = 'aBc';
  
  const decoded = decode(encodedAnswer); // ABC
  
  assert.strictEqual(userGuess1.trim().toUpperCase(), decoded.toUpperCase());
  assert.strictEqual(userGuess2.trim().toUpperCase(), decoded.toUpperCase());
  assert.strictEqual(userGuess3.trim().toUpperCase(), decoded.toUpperCase());
  console.log(`\u001b[32m✅ Passed\u001b[0m: Case-insensitive matching works for user guesses "abc", "ABC", "aBc" against encoded "abC"`);
  passed++;
} catch (e) {
  console.error(`\u001b[31m❌ Failed\u001b[0m: Case-insensitive matching failed - ${e.message}`);
  failed++;
}

// Test 3: Safety guards against falsy values
console.log('\n--- Test Category: Safe Guards for Undefined/Null ---');
try {
  assert.strictEqual(encode(undefined), '');
  assert.strictEqual(encode(null), '');
  assert.strictEqual(encode(''), '');
  assert.strictEqual(decode(undefined), '');
  assert.strictEqual(decode(null), '');
  assert.strictEqual(decode(''), '');
  console.log(`\u001b[32m✅ Passed\u001b[0m: Safety guards successfully prevented runtime exceptions on falsy inputs`);
  passed++;
} catch (e) {
  console.error(`\u001b[31m❌ Failed\u001b[0m: Safety guards crashed or returned incorrect value - ${e.message}`);
  failed++;
}

console.log(`\n\u001b[1m🎉 Test Results: ${passed} Passed, ${failed} Failed.\u001b[0m`);
