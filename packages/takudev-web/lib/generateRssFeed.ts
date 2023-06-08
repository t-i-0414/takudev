import { Feed } from 'feed';
import { marked } from 'marked';
import { getGraphqlSdk } from '~/graphql_schema';
import { isNotNullable, normalizeArticle } from '~/lib';
import type { Awaited } from '~/types';

const graphqlSdk = getGraphqlSdk();

type Articles = Awaited<
  ReturnType<typeof graphqlSdk.getAllArticleSummary>
>['articles'];

export const generateRssFeed = (articles: Articles) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const date = new Date();

  const feed = new Feed({
    title: 'Taku.dev',
    description: "This is Takuya Iwashiro's Web Dev Blog",
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/favicon-32x32.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Takuya Iwashiro`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author: {
      name: 'Takuya Iwashiro',
      email: 'gutlo.ol0414@gmail.com',
      link: 'https://github.com/t-i-0414',
    },
  });

  if (isNotNullable(articles)) {
    articles.data.forEach(data => {
      const normalizedArticle = normalizeArticle({ data });

      if (!isNotNullable(normalizedArticle)) {
        return;
      }

      const { id, slug, title, description, content, publishedAt } =
        normalizedArticle;
      const url = `${baseUrl}/articles/${id}_${slug}`;

      feed.addItem({
        title,
        description,
        id: url,
        link: url,
        content: marked(content),
        date: new Date(publishedAt),
      });
    });
  }

  return feed.rss2();
};
