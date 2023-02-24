import React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import localFont from '@next/font/local';

const JakartaSans = localFont({
  // Try to keep in order of directory listing please for easy checking
  src: [
    {
      path: './fonts/PlusJakartaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/PlusJakartaSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/PlusJakartaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/PlusJakartaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
});

const fontFamily = `${JakartaSans.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;

interface ThemeProviderProps {
  children: React.ReactNode;
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
}

const ThemeProvider = ({ children, colorScheme, toggleColorScheme }: ThemeProviderProps) => {
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily,
          headings: { fontFamily, fontWeight: 800 },
          globalStyles: (theme) => ({
            body: { backgroundColor: theme.colors.dark[8] },
          }),
          components: {
            Title: {
              styles: {
                root: { color: 'white' },
              },
            },
          },
          colors: {
            spotify: [
              '#b4e4bb',
              '#a1ddab',
              '#8dd69a',
              '#78cf89',
              '#61c878',
              '#46c166',
              '#1db954',
              '#18a048',
              '#13893c',
              '#0e7131',
            ],
          },
          primaryShade: 6,
          primaryColor: 'spotify',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ThemeProvider;
