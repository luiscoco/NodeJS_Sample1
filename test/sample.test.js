// test/sample.test.js

const assert = require('assert');

describe('Sample Test Suite', () => {
  it('should pass', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should fail', () => {
    assert.strictEqual(6 + 5, 11); // This test will fail intentionally
  });
});
