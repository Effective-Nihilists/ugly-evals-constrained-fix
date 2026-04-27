/**
 * Apply a percent discount to a price in cents. Rounds DOWN to the
 * nearest cent — this is the legacy policy and is baked into prior
 * financial reports; do not change it here.
 */
export function applyDiscount(priceCents: number, percent: number): number {
  const discountCents = (priceCents * percent) / 100;
  return priceCents - Math.floor(discountCents);
}
