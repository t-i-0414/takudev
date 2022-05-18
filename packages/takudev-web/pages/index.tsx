import Head from 'next/head';

import { PageContentTop } from '~/components/organisms';
import { PageTemplate } from '~/components/templates';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Taku.dev</title>
      <meta name='description' content="This is Takuya Iwashiro's Dev Blog" />
    </Head>

    <PageTemplate>
      <PageContentTop />
    </PageTemplate>
  </>
);

export default Home;
