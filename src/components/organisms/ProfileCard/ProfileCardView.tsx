import React from 'react';

// import styles from './ProfileCardView.module.scss';
import { ProfileIcon } from '~/components/atoms';
import { SnsIconList } from '~/components/molecules';

import { css } from 'styled-system/css';

export const ProfileCardView = () => (
  <div
    className={css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '304px',
      height: '88px',
    })}
  >
    <ProfileIcon />
    <div
      className={css({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '-6px',
        marginLeft: '14px',
      })}
    >
      <div className={css({ textAlign: 'left' })}>
        <p
          className={css({
            margin: 0,
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: 1.2,
            color: '#0d0d0d',
          })}
        >
          Takuya Iwashiro
        </p>
        <p
          className={css({
            margin: 0,
            fontSize: '16px',
            lineHeight: 1.2,
            color: '#0d0d0d',
          })}
        >
          Web Dev at Tokyo, JAPAN
        </p>
      </div>
      <div className={css({ marginLeft: '-6px' })}>
        <SnsIconList colorName='borderColor' />
      </div>
    </div>
  </div>
);
