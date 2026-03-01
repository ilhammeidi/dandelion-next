'use client';

import React from 'react';
import PropTypes from 'prop-types';
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

export default function ThemeProviderWrapper({ children }) {
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
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
