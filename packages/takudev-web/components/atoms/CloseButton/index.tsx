import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './CloseButton.module.scss';

type Props = {
  size?: number;
  ariaLabel: React.ButtonHTMLAttributes<HTMLButtonElement>['aria-label'];
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & React.ComponentPropsWithoutRef<'button'>;

export const CloseButton: React.FC<Props> = React.memo(
  ({ size = 18, ariaLabel, onClick, ...rest }) => (
    <button
      type='button'
      aria-label={ariaLabel}
      onClick={onClick}
      className={styles.button}
      {...rest}
    >
      <div className={styles.icon}>
        <svg width={size} height={size} viewBox='0 0 17.556 17.556'>
          <path
            id='light'
            d='M16.263,16.678,9.192,9.607,2.121,16.678A1,1,0,0,1,.707,15.263l7.071-7.07L.707,1.121A1,1,0,0,1,2.121-.293L9.193,6.778,16.264-.293a1,1,0,0,1,1.414,1.414L10.607,8.192l7.071,7.071a1,1,0,0,1-1.415,1.415Z'
            transform='translate(-0.414 0.585)'
          />
        </svg>
      </div>
    </button>
  ),
  isEqual,
);
CloseButton.displayName = 'CloseButton';