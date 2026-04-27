import { applyDiscount as _applyDiscount } from '../core/discount.js';

export function applyDiscount(priceCents: number, percent: number): number {
  const discountCents = Math.round((priceCents * percent) / 100);
  return priceCents - discountCents;
}
