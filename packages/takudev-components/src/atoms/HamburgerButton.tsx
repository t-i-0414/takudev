import React from 'react';
import isEqual from 'react-fast-compare';

type Props = {
  ariaLabel: string;
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const HamburgerButton: React.FC<Props> = React.memo(
  ({ ariaLabel, onClick }) => (
    // const COLOR = '#ddd';

    <>
      <button
        type='button'
        aria-label={ariaLabel}
        className='hamburger-button'
        onClick={onClick}
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
            bottom: 0;
            height: 2px;
            left: 0;
            margin: auto;
            position: absolute;
            right: 0;
            top: 0;
            width: 24px;
          }
        `}
      </style>
    </>
  ),
  isEqual,
);
HamburgerButton.displayName = 'Logo';
