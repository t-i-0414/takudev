import { Html, Head, Main, NextScript } from 'next/document';

import { ColorThemeScript } from '~/components/scripts';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import type { Stage } from '~/types';

const Document = () => {
  const stage: Stage = (process.env.STAGE as Stage) ?? 'preview';
  const shouldNoIndex = stage === 'staging';

  return (
    <Html lang='en'>
      <Head>
        {shouldNoIndex && <meta name='robots' content='noindex' />}
        <link rel='icon' href='/favicon.ico' />
        <link href='https://unpkg.com/sanitize.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://use.typekit.net/rba3ian.css' />
      </Head>
      <body>
        <ColorThemeScript />
        <Main />
        <div id={MENU_MODAL_ROOT_ELEMENT_ID} />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
