import React from 'react';
import isEqual from 'react-fast-compare';

import { useColor } from '~/hooks';

type Props = {
  color?: string;
  ariaLabel: React.ButtonHTMLAttributes<HTMLButtonElement>['aria-label'];
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & React.ComponentPropsWithoutRef<'button'>;

export const HamburgerButton: React.FC<Props> = React.memo(
  ({ color, ariaLabel, onClick, ...rest }) => {
    const { textColor } = useColor();
    const buttonColor = color || textColor;

    return (
      <>
        <button
          type='button'
          aria-label={ariaLabel}
          className='hamburger-button'
          onClick={onClick}
          {...rest}
        >
          <span className='hamburger-button__icon' />
        </button>
        <style jsx>
          {`
            .hamburger-button {
              background-color: transparent;
              appearance: none;
              border: none;
              cursor: pointer;
              padding: 0;
              position: relative;
              height: 48px;
              width: 48px;
            }
            .hamburger-button:hover {
              opacity: 0.8;
            }
            .hamburger-button:focus-visible {
              opacity: 0.8;
            }
            .hamburger-button:active {
              opacity: 0.6;
            }
            .hamburger-button__icon {
              background-color: ${buttonColor};
              border-radius: 1px;
              bottom: 0;
              height: 2px;
              left: 0;
              margin: auto;
              position: absolute;
              right: 0;
              top: 0;
              width: 24px;
            }

            .hamburger-button__icon::before,
            .hamburger-button__icon::after {
              background-color: ${buttonColor};
              border-radius: 1px;
              content: '';
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
            }

            .hamburger-button__icon::before {
              top: -8px;
            }

            .hamburger-button__icon::after {
              top: 8px;
            }
          `}
        </style>
      </>
    );
  },
  isEqual,
);
HamburgerButton.displayName = 'Logo';
