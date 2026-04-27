import { applyDiscount as applyDiscountCore } from '../core/discount.js';

export function applyDiscount(priceCents: number, percent: number): number {
  const discountCents = (priceCents * percent) / 100;
  return priceCents - Math.round(discountCents);
}
