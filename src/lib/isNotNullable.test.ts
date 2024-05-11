import { describe, expect, it } from '@jest/globals';
import { isNotNullable } from './isNotNullable';

describe('filterNotNullableElement', () => {
  it.each([
    {
      element: null,
      expected: false,
    },
    { element: undefined, expected: false },
    { element: 'not nullable', expected: true },
  ])(
    'should return $expected if $element are passed',
    ({ element, expected }) => {
      expect.hasAssertions();
      expect(isNotNullable(element)).toBe(expected);
    },
  );
});
