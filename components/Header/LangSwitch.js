'use client';

import React, { useTransition } from 'react';
import {useRouter, Link} from '@/i18n/navigation'; // Adjust the import path
import { setUserLocale } from '@/i18n/setLocale';
 
export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
 
  const onLocaleChange = (event) => {
    const nextLocale = event.target.value;
    // router.replace navigates to the new locale while preserving the current pathname
    startTransition(() => {
      setUserLocale(nextLocale);
    });
  };
 
  return (
    <div>
      <select disabled={isPending} onChange={onLocaleChange} defaultValue={router.locale}>
        {['en', 'de', 'ar'].map((locale) => ( // List your supported locales
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
      <br />
      <Link href="/" locale="de">Switch to German</Link><br />
      <Link href="/" locale="en">Switch to English</Link><br />
      <Link href="/" locale="ar">Switch to Arabic</Link>
    </div>
  );
}
