import Script from 'next/script';
import React from 'react';
import { GA_TRACKING_ID } from '~/lib';

export const GoogleAnalyticsScript: React.FC = React.memo(() => (
  <>
    <Script
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      id='gtag-init'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
));
GoogleAnalyticsScript.displayName = 'GoogleAnalyticsScript';
