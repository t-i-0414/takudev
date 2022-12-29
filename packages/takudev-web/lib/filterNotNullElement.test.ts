import { filterNotNullableElement } from './filterNotNullableElement';

describe('filterNotNullableElement', () => {
  it.each([
    {
      array: [null, 'one', 'two', undefined, 'three'],
      expected: ['one', 'two', 'three'],
    },
    { array: [null, undefined], expected: [] },
    { array: [], expected: [] },
  ])('should return $expected if $array are passed', ({ array, expected }) => {
    expect.hasAssertions();
    expect(filterNotNullableElement(array)).toStrictEqual(expected);
  });
});
