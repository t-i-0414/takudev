import Decimal from 'decimal.js';

export const vw = (px: number, base = 375) => {
  const pxDecimal = new Decimal(px);
  const baseDecimal = new Decimal(base);

  if (pxDecimal.lt(0) || baseDecimal.lt(0)) {
    throw new Error(
      'Negative values cannot be passed to the px or base argument.',
    );
  }

  const ratioDecimal = pxDecimal.div(baseDecimal);

  const percentDecimal = ratioDecimal.mul(100);

  const fixedPercentString = percentDecimal.toFixed(2);

  return `${fixedPercentString}vw`;
};
