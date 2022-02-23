import { throttle } from 'throttle-debounce';

export const handleWindowVerticalHeight = () => {
  if (typeof window !== 'undefined') {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', throttle(16, setFillHeight));

    setFillHeight();
  }
};
