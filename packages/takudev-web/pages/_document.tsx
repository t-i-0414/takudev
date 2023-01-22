import { Html, Head, Main, NextScript } from 'next/document';
import { ColorThemeScript, GoogleAnalyticsScript } from '~/components/scripts';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import { GA_TRACKING_ID } from '~/lib';
import type { Stage } from '~/types';

const Document = () => {
  const stage: Stage = (process.env.STAGE as Stage) ?? 'preview';
  const shouldNoIndex = stage === 'staging';

  return (
    <Html lang='en'>
      <Head>
        {shouldNoIndex && <meta name='robots' content='noindex' />}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='/msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
        <link
          href='https://unpkg.com/sanitize.css@13.0.0/sanitize.css'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='https://use.typekit.net/rba3ian.css' />
        {GA_TRACKING_ID && <GoogleAnalyticsScript />}
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
