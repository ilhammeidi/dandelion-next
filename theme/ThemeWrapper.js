'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { TssCacheProvider } from 'tss-react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useState, useMemo, createContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  changeColorScheme: () => {},
});

export const colorPalette = {
  oceanBlue: {
    primary: {
      main: '#00a1d6',
      light: '#99d8ff',
    },
    secondary: {
      main: '#00cb4e',
    },
  },
  sporty: {
    primary: {
      main: '#ac1fed',
      light: '#eda3ff',
    },
    secondary: {
      main: '#02acbc',
    },
  }
};

export default function ThemeWrapper({ children }) {
  const [mode, setMode] = useState('light');

  const [palette, setPalette] = useState(colorPalette.oceanBlue);
  
  const theme = useMemo(() => getTheme(mode, palette), [mode, palette]);
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }), []
  );

  const changeScheme = useMemo(
    () => ({
      changeColorScheme: (scheme) => {
        if(colorPalette[scheme]){
          setPalette(colorPalette[scheme]);
        }
      }
    }), []
  );

  return (
    <ColorModeContext.Provider value={{ ...colorMode, ...changeScheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextAppDirEmotionCacheProvider
          options={{
            'key': 'tss',
            stylisPlugins: [ prefixer, rtlPlugin ],
          }}
          CacheProvider={TssCacheProvider}
        >
          <AppRouterCacheProvider options={{
            enableCssLayer: false,
            stylisPlugins: [ prefixer, rtlPlugin ],
          }}>
            {children}
          </AppRouterCacheProvider>
        </NextAppDirEmotionCacheProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
