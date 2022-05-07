import Decimal from 'decimal.js';

const BASE_FONT_SIZE = 16;

export const rem = (px: number) => {
  const pxDecimal = new Decimal(px);

  if (pxDecimal.lt(0)) {
    throw new Error('Negative values cannot be passed to the px argument.');
  }

  const ratioDecimal = pxDecimal.div(BASE_FONT_SIZE);

  const fixedPercentString = ratioDecimal.toFixed(2);

  return `${fixedPercentString}rem`;
};
