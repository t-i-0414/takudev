/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';

import type { ColorMode } from '~/@types';

import { colorModeLocalstorageKey } from '~/consts';

import { useColorProvider } from './useColorProvider';

describe('useColorProvider', () => {
  describe('_colorMode arg exists', () => {
    afterEach(() => {
      localStorage.removeItem(colorModeLocalstorageKey);
    });

    it.each([
      {
        expected: 'lightMode',
        unexpected: 'true',
      },
      {
        expected: 'darkMode',
        unexpected: 'false',
      },
    ] as { expected: Exclude<ColorMode, null>; unexpected: string }[])(
      'should return $expected if _colorMode is $expected.',
      ({ expected, unexpected }) => {
        expect.hasAssertions();

        localStorage.setItem(colorModeLocalstorageKey, unexpected);

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

  describe('preservedColorMode exists in localStorage', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
    });

    afterEach(() => {
      localStorage.removeItem(colorModeLocalstorageKey);
    });

    it.each([
      { isDarkMode: 'false', expected: 'lightMode' },
      { isDarkMode: 'true', expected: 'darkMode' },
    ])(
      'should return $expected if preservedColorMode is $expected',
      ({ isDarkMode, expected }) => {
        expect.hasAssertions();

        localStorage.setItem(colorModeLocalstorageKey, isDarkMode);

        const { result } = renderHook(() => useColorProvider());

        expect(result.current).toStrictEqual({
          colorMode: expected,
          handleColorMode: expect.any(Function),
        });
      },
    );
  });

  describe('preservedColorMode does not exist in localStorage', () => {
    afterEach(() => {
      localStorage.removeItem(colorModeLocalstorageKey);
    });

    it.each([
      { prefersColorScheme: 'light', expected: 'lightMode' },
      { prefersColorScheme: 'dark', expected: 'darkMode' },
    ])(
      'should return $expected if window.matchMedia.media === (prefers-color-scheme: $expected)',
      ({ prefersColorScheme, expected }) => {
        expect.hasAssertions();

        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: query === `(prefers-color-scheme: ${prefersColorScheme})`,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          })),
        });

        const { result } = renderHook(() => useColorProvider());

        expect(result.current).toStrictEqual({
          colorMode: expected,
          handleColorMode: expect.any(Function),
        });
      },
    );
  });
});
