import { ColorProvider } from '~/components/providers';

import type { AppProps } from 'next/app';

import '~/styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ColorProvider>
    <Component {...pageProps} />
  </ColorProvider>
);

export default MyApp;
