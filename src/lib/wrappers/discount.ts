export function applyDiscount(priceCents: number, percent: number): number {
  const discountCents = (priceCents * percent) / 100;
  return priceCents - Math.round(discountCents);
}
