import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { createFocusTrap } from 'focus-trap';
import React, { useRef, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { CloseButton } from '~/components/atoms';
import styles from './MenuModal.module.scss';

type Props = {
  isOpen: boolean;
  isClose: boolean;
  hrefToContact: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  ariaLabelledBy: string;
  onClickCloseButton: () => void;
};

export const MenuModalView: React.FC<Props> = React.memo(
  ({ isOpen, isClose, hrefToContact, ariaLabelledBy, onClickCloseButton }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!isOpen || ref.current === null) {
        return;
      }

      const trap = createFocusTrap(ref.current, {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        returnFocusOnDeactivate: true,
        fallbackFocus: ref.current,
        onDeactivate: onClickCloseButton,
      });
      trap.activate();

      disableBodyScroll(ref.current);

      // eslint-disable-next-line consistent-return
      return () => {
        trap.deactivate();
        clearAllBodyScrollLocks();
      };
    }, [ref, onClickCloseButton, isOpen]);

    return (
      <div
        ref={ref}
        aria-modal
        aria-labelledby={ariaLabelledBy}
        role='dialog'
        className={`${styles.wrapper} ${isOpen && styles['wrapper--open']} ${
          isClose && styles['wrapper--close']
        }`}
      >
        <div
          className={`${styles['close-button-container']} ${
            isOpen && styles['close-button-container--open']
          } ${isClose && styles['close-button-container--close']}`}
        >
          <CloseButton
            aria-label='Close Menu Modal'
            onClick={onClickCloseButton}
          />
        </div>

        <div
          className={`${styles['menu-list-container']} ${
            isOpen && styles['menu-list-container--open']
          } ${isClose && styles['menu-list-container--close']}`}
        >
          <ul>
            <li>
              <a href={hrefToContact} aria-label='go to contact page'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  },
  isEqual,
);
MenuModalView.displayName = 'MenuModalView';
