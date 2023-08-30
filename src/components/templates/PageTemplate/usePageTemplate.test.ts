/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';

import { usePageTemplate } from './usePageTemplate';

describe('usePageTemplate', () => {
  describe('handleCustomVh', () => {
    it.each([
      {
        innerHeight: 100,
        expected: '1px',
      },
      {
        innerHeight: 200,
        expected: '2px',
      },
      {
        innerHeight: 1000,
        expected: '10px',
      },
    ])(
      'should set --vh to window.innerHeight($innerHeight) * 0.01 px',
      ({ innerHeight, expected }) => {
        expect.hasAssertions();

        const { result } = renderHook(() => usePageTemplate());

        window.innerHeight = innerHeight;

        result.current.handleCustomVh();

        expect(document.documentElement.style.getPropertyValue('--vh')).toBe(
          expected,
        );
      },
    );
  });

  describe('handleViewPort', () => {
    it.each([
      {
        outerWidth: 359,
        expected: 'width=360',
      },
      {
        outerWidth: 360,
        expected: 'width=360',
      },
      {
        outerWidth: 361,
        expected: 'width=device-width,initial-scale=1',
      },
    ])(
      'should set viewport to $expected if window.outerWidth is $outerWidth',
      ({ outerWidth, expected }) => {
        expect.hasAssertions();

        const meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        document.head.appendChild(meta);

        const { result } = renderHook(() => usePageTemplate());

        window.outerWidth = outerWidth;

        result.current.handleViewPort();

        expect(
          document
            // eslint-disable-next-line testing-library/no-node-access
            .querySelector("meta[name='viewport']")
            ?.getAttribute('content'),
        ).toBe(expected);
      },
    );
  });
});
