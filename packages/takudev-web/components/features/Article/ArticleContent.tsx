import React from 'react';
import isEqual from 'react-fast-compare';

type Props = {
  title: string;
  slug: string;
  content: string;
  publishedAt: Date;
};

export const ArticleContent: React.FC<Props> = React.memo(
  ({ title }) => (
    <div>
      <h1>{title}</h1>
    </div>
  ),
  isEqual,
);
ArticleContent.displayName = 'ArticleContent';
