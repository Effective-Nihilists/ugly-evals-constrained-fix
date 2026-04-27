import { describe, expect, it } from 'vitest';
import { applyDiscount } from '../index.js';

describe('applyDiscount (rounded to nearest cent)', () => {
  it('rounds a half-cent discount up, not down', () => {
    // 125 * 0.1 = 12.5 → Math.round → 13 → 125 - 13 = 112
    expect(applyDiscount(125, 10)).toBe(112);
  });

  it('handles exact cents', () => {
    // 100 * 0.25 = 25.0 → 100 - 25 = 75
    expect(applyDiscount(100, 25)).toBe(75);
  });

  it('clamps zero percent to no-op', () => {
    expect(applyDiscount(999, 0)).toBe(999);
  });
});
