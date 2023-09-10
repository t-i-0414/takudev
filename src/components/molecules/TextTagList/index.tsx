import React from 'react';

import { css } from 'styled-system/css';
import { TextTag } from '~/components/atoms';

type Props = {
  tagList: string[];
};

export const TextTagList: React.FC<Props> = ({ tagList }) => (
  <div
    className={css({
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    })}
  >
    {tagList.map(tag => (
      <TextTag key={tag} text={tag} />
    ))}
  </div>
);
