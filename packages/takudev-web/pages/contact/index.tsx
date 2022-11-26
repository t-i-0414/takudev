import Head from 'next/head';
import { ContactPageContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import type { NextPage } from 'next';

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Taku.dev | Contact</title>
      <meta
        name='description'
        content="This is Contact Page of Takuya Iwashiro's Dev Blog"
      />
    </Head>

    <PageTemplate>
      <ContactPageContent />
    </PageTemplate>
  </>
);

export default ContactPage;
