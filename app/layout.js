'use client';

import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import ThemeProviderWrapper from '@/theme/ThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { Geist, Geist_Mono } from 'next/font/google';
import { TssCacheProvider } from 'tss-react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export const AppThemeContext = createContext(null);

export default function RootLayout({ children }) {
  return (
    <html lang='en' dir="rtl">
      <ThemeProviderWrapper>
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
            <body dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
              {children}
            </body>
          </AppRouterCacheProvider>
        </NextAppDirEmotionCacheProvider>
      </ThemeProviderWrapper>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppThemeContext =  () => useContext(AppThemeContext);
