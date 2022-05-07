import { vw } from './vw';

describe('vw', () => {
  describe('normal', () => {
    it.each([
      { px: 0, expected: '0.00vw' },
      { px: 374.95, expected: '99.99vw' },
      { px: 375, expected: '100.00vw' },
      { px: 375.02, expected: '100.01vw' },
      { px: 750, expected: '200.00vw' },
    ])(
      'should return $expected if arg (px: $px) are entered',
      ({ px, expected }) => {
        expect.hasAssertions();

        expect(vw(px)).toBe(expected);
      },
    );

    it.each([
      { px: 0, base: 1200, expected: '0.00vw' },
      { px: 1199.82, base: 1200, expected: '99.99vw' },
      { px: 1200, base: 1200, expected: '100.00vw' },
      { px: 1200.06, base: 1200, expected: '100.01vw' },
      { px: 2400, base: 1200, expected: '200.00vw' },
    ])(
      'should return $expected if arg (px: $px, base: $base) are entered',
      ({ px, base, expected }) => {
        expect.hasAssertions();

        expect(vw(px, base)).toBe(expected);
      },
    );
  });
  describe('abnormal', () => {
    it('should throw an error if arg (px: -1) are entered', () => {
      expect.hasAssertions();

      expect(() => vw(-1)).toThrow(
        'Negative values cannot be passed to the px or base argument.',
      );
    });

    it('should throw an error if arg (px: 0, base: -1) are entered', () => {
      expect.hasAssertions();

      expect(() => vw(0, -1)).toThrow(
        'Negative values cannot be passed to the px or base argument.',
      );
    });

    it('should throw an error if arg (px: -1, base: -1) are entered', () => {
      expect.hasAssertions();

      expect(() => vw(-1, -1)).toThrow(
        'Negative values cannot be passed to the px or base argument.',
      );
    });
  });
});
