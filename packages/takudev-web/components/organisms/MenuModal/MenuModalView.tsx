import React from 'react';
import isEqual from 'react-fast-compare';
import { CloseButton } from '~/components/atoms';
import styles from './MenuModal.module.scss';

type Props = {
  isOpen: boolean;
  isClose: boolean;
  hrefToContact: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  onClickCloseButton: () => void;
};

export const MenuModalView: React.FC<Props> = React.memo(
  ({ isOpen, isClose, hrefToContact, onClickCloseButton }) => (
    <div
      id='menu-modal'
      aria-hidden={!isOpen}
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
          aria-expanded={isOpen}
          aria-label='Close Menu Modal'
          aria-controls='menu-modal'
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
  ),
  isEqual,
);
MenuModalView.displayName = 'MenuModalView';
