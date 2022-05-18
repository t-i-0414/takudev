import { useCallback } from 'react';

export const usePageContentLayouter = () => {
  const handleCustomVh = useCallback(() => {
    if (window !== undefined) {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, []);

  const handleViewPort = useCallback(() => {
    if (window !== undefined) {
      const viewport = document.querySelector('meta[name="viewport"]');
      const value =
        window.outerWidth > 360
          ? 'width=device-width,initial-scale=1'
          : 'width=360';
      if (viewport?.getAttribute('content') !== value) {
        viewport?.setAttribute('content', value);
      }
    }
  }, []);

  return { handleCustomVh, handleViewPort };
};
