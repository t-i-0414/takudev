import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ColorProvider } from '~/components/providers';
import { GA_TRACKING_ID, measurePageViewForGa } from '~/lib';
import type { AppProps } from 'next/app';

import '~/styles/_global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      measurePageViewForGa(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // eslint-disable-next-line consistent-return
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  );
};

export default MyApp;
