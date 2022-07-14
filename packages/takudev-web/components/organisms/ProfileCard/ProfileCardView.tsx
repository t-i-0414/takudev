import React from 'react';
import { ProfileIcon } from '~/components/atoms';
import { SnsIconList } from '~/components/molecules';
import styles from './ProfileCardView.module.scss';

export const ProfileCardView = () => (
  <div className={styles.container}>
    <ProfileIcon />
    <div className={styles['right-container']}>
      <div className={styles['text-container']}>
        <p className={styles['name-text']}>Takuya Iwashiro</p>
        <p className={styles['location-text']}>Web Dev at Tokyo, JAPAN</p>
      </div>
      <div className={styles['sns-icon-list-container']}>
        <SnsIconList color='borderColor' />
      </div>
    </div>
  </div>
);
