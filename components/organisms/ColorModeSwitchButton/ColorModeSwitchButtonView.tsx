import React from 'react';
import isEqual from 'react-fast-compare';
import styles from './ColorModeSwitchButton.module.scss';
import { colorModeMap } from '~/consts';
import { ColorMode } from '~/types';

type Props = {
  colorMode: ColorMode | null;
  onClick: () => void;
};

const { lightMode } = colorModeMap;

export const ColorModeSwitchButtonView: React.FC<Props> = React.memo(
  ({ colorMode, onClick }) => (
    <div
      tabIndex={0}
      role='button'
      aria-label={`switch color mode to ${
        colorMode === lightMode ? 'dark' : 'light'
      }`}
      className={styles.container}
      onClick={onClick}
      onKeyPress={onClick}
    >
      <div className={styles.button}>
        <div className='body' />
      </div>

      <div className={styles.moon}>
        <svg
          aria-hidden
          xmlns='http://www.w3.org/2000/svg'
          width='11.618'
          height='13'
          viewBox='0 0 11.618 13'
        >
          <path
            id='moon-solid'
            d='M9.476,13a6.488,6.488,0,0,0,5.049-2.407.3.3,0,0,0-.294-.491A5.092,5.092,0,0,1,10.759.673a.3.3,0,0,0-.1-.564A6.5,6.5,0,1,0,9.476,13Z'
            transform='translate(-2.976)'
            fill='#0d0d0d'
          />
        </svg>
      </div>

      <div className={styles.sun}>
        <svg
          aria-hidden
          xmlns='http://www.w3.org/2000/svg'
          width='12.999'
          height='13'
          viewBox='0 0 12.999 13'
        >
          <path
            id='sun-solid'
            d='M6.5,4.062A2.438,2.438,0,1,0,8.938,6.5,2.441,2.441,0,0,0,6.5,4.062Zm6.256,2.044-2.4-1.2L11.2,2.356a.439.439,0,0,0-.556-.556L8.1,2.651,6.894.244a.44.44,0,0,0-.787,0l-1.2,2.4L2.354,1.8a.439.439,0,0,0-.556.556L2.648,4.9l-2.4,1.2a.44.44,0,0,0,0,.787l2.4,1.2L1.8,10.646a.439.439,0,0,0,.556.556L4.9,10.352l1.2,2.4a.44.44,0,0,0,.787,0l1.2-2.4,2.549.851a.439.439,0,0,0,.556-.556L10.347,8.1l2.4-1.2a.44.44,0,0,0,.005-.79ZM8.8,8.8a3.25,3.25,0,1,1,0-4.6A3.253,3.253,0,0,1,8.8,8.8Z'
            transform='translate(0 0)'
          />
        </svg>
      </div>
    </div>
  ),
  isEqual,
);
ColorModeSwitchButtonView.displayName = 'ColorModeSwitchButtonView';
