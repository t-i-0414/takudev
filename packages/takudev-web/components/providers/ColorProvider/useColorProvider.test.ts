/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';

import { colorModeLocalstorageKey } from '~/consts';
import type { ColorMode } from '~/types';

import { useColorProvider } from './useColorProvider';

describe('useColorProvider', () => {
  describe('_colorMode arg exists', () => {
    afterEach(() => {
      localStorage.removeItem(colorModeLocalstorageKey);
    });

    it.each([
      {
        expected: 'lightMode',
        unexpected: 'darkMode',
      },
      {
        expected: 'darkMode',
        unexpected: 'lightMode',
      },
    ] as { expected: Exclude<ColorMode, null>; unexpected: Exclude<ColorMode, null> }[])(
      'should return $expected if _colorMode is $expected.',
      ({ expected, unexpected }) => {
        expect.hasAssertions();

        localStorage.setItem(
          colorModeLocalstorageKey,
          JSON.stringify(unexpected),
        );

        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: query === `(prefers-color-scheme: ${unexpected})`,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          })),
        });

        const { result } = renderHook(() => useColorProvider(expected));

        expect(result.current).toStrictEqual({
          colorMode: expected,
          handleColorMode: expect.any(Function),
        });
      },
    );
  });

  describe('preservedColorMode from localStorage', () => {
    afterEach(() => {
      localStorage.removeItem(colorModeLocalstorageKey);
    });

    it.each([
      { preserved: 'lightMode', expected: 'lightMode' },
      { preserved: 'darkMode', expected: 'darkMode' },
    ] as { preserved: Exclude<ColorMode, null>; expected: Exclude<ColorMode, null> }[])(
      'should return $expected if preservedColorMode is $expected',
      ({ preserved, expected }) => {
        expect.hasAssertions();

        localStorage.setItem(
          colorModeLocalstorageKey,
          JSON.stringify(preserved),
        );

        const { result } = renderHook(() => useColorProvider());

        expect(result.current).toStrictEqual({
          colorMode: expected,
          handleColorMode: expect.any(Function),
        });
      },
    );
  });
});
