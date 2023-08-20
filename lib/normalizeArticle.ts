import { filterNotNullableElement } from './filterNotNullableElement';
import { isNotNullable } from './isNotNullable';

export const normalizeArticle = (
  article:
    | {
        data?: {
          __typename?: 'ArticleEntity';
          id?: string | null;
          attributes?: {
            __typename?: 'Article';
            title: string;
            slug: string;
            description: string;
            content: string;
            publishedAt?: any | null;
            tags?: {
              __typename?: 'TagRelationResponseCollection';
              data: Array<{
                __typename?: 'TagEntity';
                attributes?: { __typename?: 'Tag'; name: string } | null;
              }>;
            } | null;
          } | null;
        } | null;
      }
    | null
    | undefined,
) => {
  if (
    !isNotNullable(article) ||
    !isNotNullable(article.data) ||
    !isNotNullable(article.data.id) ||
    !isNotNullable(article.data.attributes)
  ) {
    return null;
  }

  const tagList = isNotNullable(article.data.attributes.tags)
    ? filterNotNullableElement(
        article.data.attributes.tags.data.map(tag => {
          if (!isNotNullable(tag) || !isNotNullable(tag.attributes)) {
            return null;
          }

          return tag.attributes.name;
        }),
      )
    : [];

  const normalizedArticle = {
    id: article.data.id,
    title: article.data.attributes.title,
    slug: article.data.attributes.slug,
    description: article.data.attributes.description,
    tagList,
    content: article.data.attributes.content,
    publishedAt: new Date(article.data.attributes.publishedAt),
  };

  return normalizedArticle;
};
