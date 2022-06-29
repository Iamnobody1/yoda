import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextQueryParamProvider } from 'next-query-params';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <NextQueryParamProvider>
        <Component {...pageProps} />
      </NextQueryParamProvider>
    </React.StrictMode>
  );
}

export default MyApp;
