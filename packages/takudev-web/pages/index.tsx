import Head from 'next/head';
import { HomePageContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import type { NextPage } from 'next';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Taku.dev</title>
      <meta name='description' content="This is Takuya Iwashiro's Dev Blog" />
    </Head>

    <PageTemplate>
      <HomePageContent />
    </PageTemplate>
  </>
);

export default HomePage;
