'use client';

import { useCallback, useEffect } from 'react';
import { throttle } from 'throttle-debounce';

export const usePageTemplate = () => {
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

  useEffect(() => {
    handleCustomVh();
    handleViewPort();

    const throttledHandleCustomVhVariable = throttle(16, handleCustomVh);
    const throttledHandleViewPort = throttle(16, handleViewPort);

    window.addEventListener('resize', throttledHandleCustomVhVariable);
    window.addEventListener('resize', throttledHandleViewPort);

    return () => {
      window.removeEventListener('resize', throttledHandleCustomVhVariable);
      window.removeEventListener('resize', throttledHandleViewPort);
    };
  }, [handleCustomVh, handleViewPort]);

  return { handleCustomVh, handleViewPort };
};
