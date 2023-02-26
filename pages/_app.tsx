import { useState } from 'react';
import NextApp, { AppContext, AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '../providers';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>My Spotify</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/assets/icon.png" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
