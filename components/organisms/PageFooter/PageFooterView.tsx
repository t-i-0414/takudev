import React from 'react';

import styles from './PageFooter.module.scss';

import { Logo } from '~/components/atoms';
import { SnsIconList } from '~/components/molecules';
import { hrefMap } from '~/consts';

export const PageFooterView: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles['logo-container']}>
      <Logo href={hrefMap.home} />
    </div>

    <ul className={styles['menu-list']}>
      <li>
        <a
          href={hrefMap.contact}
          aria-label='go to contact page'
          target='_blank'
          rel='noreferrer'
        >
          Contact
        </a>
      </li>
    </ul>

    <div className={styles['sns-icon-list-container']}>
      <SnsIconList colorName='white' />
    </div>

    <small className={styles['copy-right']}>
      &copy;Takuya Iwashiro All Rights Reserved.
    </small>
  </footer>
);
