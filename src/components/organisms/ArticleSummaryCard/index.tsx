import { format } from 'date-fns';
import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';

import { css } from 'styled-system/css';
import { TextTagList } from '~/components/molecules';

type Props = {
  slug: string;
  title: string;
  publishedAt: Date;
  tagList: string[];
};

export const ArticleSummaryCard: React.FC<Props> = React.memo(
  ({ slug, title, publishedAt, tagList }) => {
    const formattedDate = useMemo(
      () => format(publishedAt, 'MMM dd, yyyy'),
      [publishedAt],
    );

    const hasTagList = useMemo(() => tagList.length > 0, [tagList]);

    return (
      <a
        aria-label='article'
        href={`/articles/${slug}`}
        className={`${css({
          width: { base: '100%', md: '296px' },
          padding: '20px 10px',
          textDecoration: 'none',
          borderRadius: '16px',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',

          _hover: {
            opacity: 0.6,
          },

          _focusVisible: {
            opacity: 0.6,
          },

          _active: {
            opacity: 0.4,
          },
        })} container`}
      >
        <div className={css({ margin: '0 0 12px' })}>
          <p
            className={css({
              display: '-webkit-box',
              maxWidth: '100%',
              overflow: 'hidden',
              fontSize: '20px',
              fontWeight: 'bold',
              lineHeight: 1.2,
              WebkitLineClamp: 2,
              // @ts-expect-error
              '-webkit-box-orient': 'vertical',
              color: '#0d0d0d',
            })}
          >
            {title}
          </p>
        </div>

        <p
          className={css({
            margin: 0,
            fontSize: '14px',
            color: '#0d0d0d',
          })}
        >
          {formattedDate}
        </p>

        {hasTagList && (
          <div
            className={css({
              margin: '14px 0 0',
            })}
          >
            <TextTagList tagList={tagList} />
          </div>
        )}
      </a>
    );
  },
  isEqual,
);
ArticleSummaryCard.displayName = 'ArticleSummaryCard';
