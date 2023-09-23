import React from 'react';

import { GoogleAnalyticsScript } from '~/components/scripts';
import { PageTemplate } from '~/components/templates';
import { GA_TRACKING_ID } from '~/lib';

import './global.css';

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang='en'>
    <head>
      {process.env.STAGE === 'staging' && (
        <meta name='robots' content='noindex' />
      )}
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
      <link rel='stylesheet' href='https://use.typekit.net/rba3ian.css' />
    </head>
    <body>
      <PageTemplate>{children}</PageTemplate>
      {/* {children} */}
      {GA_TRACKING_ID && <GoogleAnalyticsScript />}
    </body>
  </html>
);

export default RootLayout;
