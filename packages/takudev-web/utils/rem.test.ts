import { rem } from './rem';

describe('rem', () => {
  describe('normal', () => {
    it.each([
      { px: 0, expected: '0.00rem' },
      { px: 15.76, expected: '0.99rem' },
      { px: 16.0, expected: '1.00rem' },
      { px: 16.08, expected: '1.01rem' },
      { px: 32, expected: '2.00rem' },
    ])(
      'should return $expected if arg (px: $px) are entered',
      ({ px, expected }) => {
        expect.hasAssertions();

        expect(rem(px)).toBe(expected);
      },
    );
  });
  describe('abnormal', () => {
    it('should throw an error if arg (px: -1) are entered', () => {
      expect.hasAssertions();

      expect(() => rem(-1)).toThrow(
        'Negative values cannot be passed to the px argument.',
      );
    });
  });
});
