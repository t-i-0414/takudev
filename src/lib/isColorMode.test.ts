import { describe, expect, it } from '@jest/globals';
import { isColorMode } from './isColorMode';

describe('isColorMode', () => {
  it.each([
    { mode: 'lightMode', expected: true },
    { mode: 'darkMode', expected: true },
    { mode: 'notColorMode', expected: false },
  ])(
    'should return $expected if $dateString are entered',
    ({ mode, expected }) => {
      expect.hasAssertions();
      expect(isColorMode(mode)).toBe(expected);
    },
  );
});
