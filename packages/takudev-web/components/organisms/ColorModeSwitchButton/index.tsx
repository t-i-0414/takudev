import Image from 'next/image';
import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';

import { ColorContext } from '~/contexts';
import { useColor } from '~/hooks';
import MoonSVG from '~/public/moon.svg';
import SunSVG from '~/public/sun.svg';

export const ColorModeSwitchButton: React.FC = React.memo(() => {
  const { colorMode, handleColorMode } = useContext(ColorContext);
  const { white, black } = useColor();

  const marginLeftStyle = colorMode === 'light' ? '-12%' : '-88%';

  return (
    <>
      <div
        tabIndex={0}
        role='button'
        aria-label={`toggle color mode to ${
          colorMode === 'light' ? 'dark' : 'light'
        }`}
        className='container'
        onClick={handleColorMode}
        onKeyPress={handleColorMode}
      >
        <div className='button-container'>
          <div className='button-body' />
        </div>

        <div className='icon-moon-container'>
          <Image
            src={MoonSVG.src ?? `/${MoonSVG}`}
            alt=''
            width={13}
            height={13}
          />
        </div>

        <div className='icon-sun-container'>
          <Image
            src={SunSVG.src ?? `/${SunSVG}`}
            alt=''
            width={13}
            height={13}
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          background-color: ${white};
          border-radius: 16px;
          cursor: pointer;
          height: 32px;
          margin: 0;
          position: relative;
          width: 52px;
        }
        .button-container {
          border-radius: 16px;
          height: 32px;
          position: absolute;
          width: 52px;
          z-index: 1;
        }
        .button-body {
          background-color: ${black};
          border-radius: 50%;
          height: 28px;
          left: 50%;
          position: relative;
          top: 50%;
          transform: translate(${marginLeftStyle}, -50%);
          transition: transform 0.2s ease-out;
          width: 28px;
        }
        .icon-sun-container,
        .icon-moon-container {
          align-items: center;
          display: flex;
          height: 13px;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 13px;
          z-index: 0;
        }
        .icon-sun-container {
          right: 6px;
        }
        .icon-moon-container {
          left: 6px;
        }
      `}</style>
    </>
  );
}, isEqual);
ColorModeSwitchButton.displayName = 'ColorModeSwitchButton';
