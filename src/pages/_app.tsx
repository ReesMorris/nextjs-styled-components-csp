import React from 'react';
import type { AppProps } from 'next/app';
import ThemeProvider from '../contexts/theme';
import '../libs/fontawesome';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
