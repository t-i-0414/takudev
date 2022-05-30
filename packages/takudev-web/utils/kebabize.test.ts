import { kebabize } from './kebabize';

describe('kebabize', () => {
  it.each([
    { inputStr: 'testStr', expected: 'test-str' },
    { inputStr: 'TestStr', expected: 'test-str' },
    { inputStr: '-testStr', expected: '-test-str' },
    { inputStr: '', expected: '' },
  ])(
    'should return $expected if $inputStr are entered',
    ({ inputStr, expected }) => {
      expect.hasAssertions();

      expect(kebabize(inputStr)).toBe(expected);
    },
  );
});
