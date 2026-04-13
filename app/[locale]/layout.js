import React from 'react';
import PropTypes from 'prop-types';
import ThemeWrapper from '@/theme/ThemeWrapper';
import StoreProvider from '@/lib/store/store';
import { Geist, Geist_Mono } from 'next/font/google';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang='en' dir="rtl">
      <StoreProvider>
        <ThemeWrapper>
          <body dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
            <NextIntlClientProvider>
              {children}
            </NextIntlClientProvider>
          </body>
        </ThemeWrapper>
      </StoreProvider>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired
};
