import Head from 'next/head';
import { HomePage } from '~/components';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Taku.dev</title>
      <meta name='description' content="This is Takuya Iwashiro's Dev Blog" />
    </Head>

    <HomePage />
  </>
);

export default Home;
