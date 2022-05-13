import React from 'react';
import isEqual from 'react-fast-compare';

import { HamburgerButton, Logo } from '~/components/atoms';
import { breakPointMap } from '~/consts/';
import { useColor } from '~/hooks';

import { ColorModeSwitchButton } from '../ColorModeSwitchButton';

type Props = {
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  onClickHamburgerButton: () => void;
};

export const PageHeaderPresentation: React.FC<Props> = React.memo(
  ({ hrefToHome, onClickHamburgerButton }) => {
    const { paleWhite, headerColor, gray } = useColor();

    return (
      <>
        <header className='header'>
          <nav aria-label='global menu' className='left-content'>
            <HamburgerButton
              ariaLabel='open global menu'
              color={gray}
              onClick={onClickHamburgerButton}
            />
          </nav>

          <div className='center-content'>
            <Logo color={paleWhite} href={hrefToHome} />
          </div>

          <div className='right-content'>
            <ColorModeSwitchButton />
          </div>
        </header>

        <style jsx>
          {`
            header {
              background-color: ${headerColor};
              height: 56px;
              justify-content: space-between;
              position: relative;
            }
            .left-content {
              left: 16px;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
            .center-content {
              left: 50%;
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
            }
            .right-content {
              position: absolute;
              right: 16px;
              top: 50%;
              transform: translateY(-50%);
            }

            @media screen and (min-width: ${breakPointMap.sm}px) {
              .left-content {
                left: 80px;
              }
              .right-content {
                right: 80px;
              }
            }
          `}
        </style>
      </>
    );
  },
  isEqual,
);
PageHeaderPresentation.displayName = 'PageHeaderPresentation';
