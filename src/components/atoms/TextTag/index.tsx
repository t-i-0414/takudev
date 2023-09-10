import React from 'react';

import { css } from 'styled-system/css';

type Props = {
  text: string;
};

export const TextTag: React.FC<Props> = ({ text }) => (
  <div
    className={css({
      width: 'fit-content',
      maxWidth: '100%',
      padding: '4px',
      backgroundColor: '#4f4f4f',
      borderRadius: '8px',
    })}
  >
    <p
      className={css({
        margin: 0,
        overflow: 'hidden',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fcfcfc',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      })}
    >{`#${text}`}</p>
  </div>
);
