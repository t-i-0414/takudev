import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { ColorMode } from '~/@types';
import { lightColorPaletteMap, darkColorPaletteMap } from '~/consts';

import { useColor } from './useColor';

describe('useColor', () => {
  it.each([
    {
      colorMode: 'light',
      expectedMapNameTitle: 'lightColorPaletteMap',
      expected: lightColorPaletteMap,
    },
    {
      colorMode: 'dark',
      expectedMapNameTitle: 'darkColorPaletteMap',
      expected: darkColorPaletteMap,
    },
  ])(
    'should return $expectedMapNameTitle if ColorContext is $colorMode',
    ({ colorMode, expected }) => {
      expect.hasAssertions();

      jest.spyOn(React, 'useContext').mockImplementation(() => ({
        colorMode,
      }));

      const { result } = renderHook(() => useColor());

      expect(result.current).toStrictEqual(expected);
    },
  );

  it.each([
    {
      colorMode: 'light',
      unexpectedColorMode: 'dark',
      expectedMapNameTitle: 'lightColorPaletteMap',
      expected: lightColorPaletteMap,
    },
    {
      colorMode: 'dark',
      unexpectedColorMode: 'light',
      expectedMapNameTitle: 'darkColorPaletteMap',
      expected: darkColorPaletteMap,
    },
  ])(
    'should return $expectedMapNameTitle if specifiedColorMode is $colorMode',
    ({ colorMode, unexpectedColorMode, expected }) => {
      expect.hasAssertions();

      jest.spyOn(React, 'useContext').mockImplementation(() => ({
        colorMode: unexpectedColorMode,
      }));

      const { result } = renderHook(() => useColor(colorMode as ColorMode));

      expect(result.current).toStrictEqual(expected);
    },
  );
});
