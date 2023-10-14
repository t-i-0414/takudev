import { format } from 'date-fns';
import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { TextTagList } from '~/components/molecules';
import { ProfileCard } from '~/components/organisms';

import { CodeBlock } from './CodeBlock';
import { ImageBlock } from './ImageBlock';
import { LinkBlock } from './LinkBlock';
import { TableBlock } from './TableBlock';

import { css } from 'styled-system/css';

type Props = {
  title: string;
  tagList: string[];
  content: string;
  publishedAt: Date;
};

export const ArticleContent: React.FC<Props> = React.memo(
  ({ title, publishedAt, tagList, content }) => {
    const formattedDate = useMemo(
      () => format(publishedAt, 'MMM dd, yyyy'),
      [publishedAt],
    );

    return (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          margin: '32px 16px',
          scrollbar: 'hidden',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '960px',
          })}
        >
          <div
            className={css({
              marginBottom: '32px',
            })}
          >
            <ProfileCard />
          </div>

          <div>
            <p
              className={css({
                margin: '0 0 10px',
                color: '#0d0d0d',
              })}
            >
              {formattedDate}
            </p>
          </div>

          <div
            className={css({
              marginBottom: '20px',
            })}
          >
            <h1
              className={css({
                margin: 0,
                fontSize: '32px',
                lineHeight: 1.2,
                color: '#0d0d0d',
                wordBreak: 'break-word',
              })}
            >
              {title}
            </h1>
          </div>

          <div className={css({ marginBottom: '20px' })}>
            <TextTagList tagList={tagList} />
          </div>

          <div
            className={css({
              width: '100%',
              color: '#0d0d0d',
              letterSpacing: '0.1em',

              '& h2': {
                margin: '0 0 0.2em',
                fontWeight: 700,
                wordBreak: 'break-word',
                fontSize: '24px',
              },

              '& h3': {
                margin: '0 0 0.2em',
                fontWeight: 700,
                wordBreak: 'break-word',
                fontSize: '18px',
              },

              '& h4': {
                margin: '0 0 0.2em',
                fontWeight: 700,
                wordBreak: 'break-word',
                fontSize: '16px',
              },

              '& h5': {
                margin: '0 0 0.2em',
                fontWeight: 700,
                wordBreak: 'break-word',
                fontSize: '14px',
              },

              '& h6': {
                margin: '0 0 0.2em',
                fontWeight: 700,
                wordBreak: 'break-word',
                fontSize: '12px',
              },

              '& p': {
                margin: '0 0 20px',
                fontSize: '16px',
                lineHeight: 1.8,

                '& code': {
                  padding: '0 4px',
                  color: '#fcfcfc',
                  backgroundColor: '#4f4f4f',
                  borderRadius: '4px',
                },
              },

              '& hr': {
                margin: '20px 0',
                border: 0,
                borderTop: '1px solid #4f4f4f',
              },

              '& a': {
                color: '#0000ee',

                _active: {
                  color: '#f23535',
                },
              },

              '& blockquote': {
                padding: '8px 16px',
                margin: '0 0 20px',
                fontStyle: 'italic',
                border: '1px solid #4f4f4f',

                '& p': {
                  padding: 0,
                  margin: '10px 0',
                  lineHeight: 1.7,
                },
              },

              '& ul': {
                padding: '0 0 0 20px',
                margin: '0 0 20px',
                listStyle: 'disc',

                '& li': {
                  padding: 0,
                  margin: 0,
                  lineHeight: 1.7,
                },
              },

              '& ol': {
                padding: '0 0 0 20px',
                margin: '0 0 20px',
                listStyle: 'decimal',

                '& li': {
                  padding: 0,
                  margin: 0,
                  lineHeight: 1.7,
                },
              },

              '& table': {
                '& th': {
                  width: 'fit-content',
                  padding: '10px',
                  color: '#fcfcfc',
                  backgroundColor: '#4f4f4f',
                  border: 'solid 1px #4f4f4f',
                },

                '& td': {
                  width: 'fit-content',
                  padding: '10px',
                  border: 'solid 1px #4f4f4f',
                },
              },
            })}
          >
            <ReactMarkdown
              components={{
                // @ts-expect-error
                code: CodeBlock,
                img: ImageBlock,
                table: TableBlock,
                a: LinkBlock,
              }}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  },
  isEqual,
);
ArticleContent.displayName = 'ArticleContent';

export default ArticleContent;
