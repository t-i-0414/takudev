import React from 'react';

import { GA_TRACKING_ID } from '~/lib';

export const GoogleAnalyticsScript: React.FC = React.memo(() => (
  <>
    <script
      defer
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      defer
      // eslint-disable-next-line react/no-danger
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
