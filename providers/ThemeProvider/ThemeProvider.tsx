import React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

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
          primaryShade: 6,
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
