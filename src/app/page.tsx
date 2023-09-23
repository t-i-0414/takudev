import HomePageContent from '~/components/features/Home';
import { getGraphqlSdk } from '~/graphql_schema';
import {
  isNotNullable,
  filterNotNullableElement,
  normalizeArticle,
  // generateRssFeed,
} from '~/lib';

const Home = async () => {
  const graphqlSdk = getGraphqlSdk();
  const { articles } = await graphqlSdk.getAllArticleSummary();
  const articleSummaryList = filterNotNullableElement(
    articles
      ? articles.data.map(data => {
          const normalizedArticle = normalizeArticle({ data });

          if (!isNotNullable(normalizedArticle)) {
            return null;
          }

          return {
            title: normalizedArticle.title,
            slug: `${normalizedArticle.id}_${normalizedArticle.slug}`,
            tagList: normalizedArticle.tagList,
            publishedAt: new Date(normalizedArticle.publishedAt),
          };
        })
      : [],
  );

  return <HomePageContent articleSummaryList={articleSummaryList} />;
};
export default Home;
