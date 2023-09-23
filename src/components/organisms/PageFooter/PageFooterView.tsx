import React from 'react';

import { Logo } from '~/components/atoms';
import { SnsIconList } from '~/components/molecules';
import { hrefMap } from '~/consts';

import { css } from 'styled-system/css';

export const PageFooterView: React.FC = () => (
  <footer
    className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '16px',
      backgroundColor: '#0D0D0D',
    })}
  >
    <div className={css({ marginBottom: '16px' })}>
      <Logo href={hrefMap.home} />
    </div>

    <ul
      className={css({
        padding: 0,
        margin: '0 0 16px',
      })}
    >
      <li className={css({ listStyle: 'none' })}>
        <a
          href={hrefMap.contact}
          aria-label='go to contact page'
          target='_blank'
          rel='noreferrer'
          className={css({
            padding: 0,
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#fff',
            textDecoration: 'none',

            _hover: {
              opacity: 0.8,
            },

            _focusVisible: {
              opacity: 0.8,
            },

            _active: {
              opacity: 0.6,
            },
          })}
        >
          Contact
        </a>
      </li>
    </ul>

    <div
      className={css({
        width: '328px',
        marginBottom: '16px',
      })}
    >
      <SnsIconList colorName='white' />
    </div>

    <small
      className={css({
        marginBottom: '10px',
        fontSize: '12px',
        color: '#fff',
      })}
    >
      &copy;Takuya Iwashiro All Rights Reserved.
    </small>
  </footer>
);
