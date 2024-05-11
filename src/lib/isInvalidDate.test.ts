import { describe, expect, it } from '@jest/globals';
import { isInvalidDate } from './isInvalidDate';

describe('isInvalidDate', () => {
  it.each([
    { dateString: '2022-07-17', expected: false },
    { dateString: '2022-07-17T13:00:00.000Z', expected: false },
    { dateString: '2022-07-17T13:00:00+09:00', expected: false },
    { dateString: 'invalid date', expected: true },
  ])(
    'should return $expected if $dateString are entered',
    ({ dateString, expected }) => {
      expect.hasAssertions();

      const date = new Date(dateString);

      expect(isInvalidDate(date)).toBe(expected);
    },
  );
});
