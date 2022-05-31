import { Html, Head, Main, NextScript } from 'next/document';

import { ColorThemeScript } from '~/components/scripts';
import type { Stage } from '~/types';

const Document = () => {
  const stage: Stage = (process.env.STAGE as Stage) ?? 'preview';
  const shouldNoIndex = stage !== 'production';

  return (
    <Html>
      <Head>
        {shouldNoIndex && <meta name='robots' content='noindex' />}
        <link rel='icon' href='/favicon.ico' />
        <link href='https://unpkg.com/sanitize.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://use.typekit.net/rba3ian.css' />
      </Head>
      <body>
        <ColorThemeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
