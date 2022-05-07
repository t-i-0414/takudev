/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';

import type { ColorMode } from '~/@types';

import { useColorProvider } from './useColorProvider';

describe('useColorProvider', () => {
  describe('_colorMode arg exists', () => {
    afterEach(() => {
      localStorage.removeItem('prefers-color-scheme');
    });

    it.each([
      {
        expected: 'light',
        unexpected: 'dark',
      },
      {
        expected: 'dark',
        unexpected: 'light',
      },
    ] as { expected: ColorMode; unexpected: ColorMode }[])(
      'should return $expected if _colorMode is $expected.',
      ({ expected, unexpected }) => {
        expect.hasAssertions();

        localStorage.setItem('prefers-color-scheme', unexpected);

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
      localStorage.removeItem('prefers-color-scheme');
    });

    it.each([{ expected: 'light' }, { expected: 'dark' }])(
      'should return $expected if preservedColorMode is $expected',
      ({ expected }) => {
        expect.hasAssertions();

        localStorage.setItem('prefers-color-scheme', expected);

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
      localStorage.removeItem('prefers-color-scheme');
    });

    it.each([{ expected: 'light' }, { expected: 'dark' }])(
      'should return $expected if window.matchMedia.media === (prefers-color-scheme: $expected)',
      ({ expected }) => {
        expect.hasAssertions();

        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: query === `(prefers-color-scheme: ${expected})`,
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
