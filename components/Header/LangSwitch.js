'use client';

import React from 'react';
import {useRouter, usePathname, Link} from '@/i18n/navigation'; // Adjust the import path
 
export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
 
  const onLocaleChange = (event) => {
    const nextLocale = event.target.value;
    // router.replace navigates to the new locale while preserving the current pathname
    router.replace(pathname, {locale: nextLocale});
  };
 
  return (
    <div>
      <select onChange={onLocaleChange} defaultValue={router.locale}>
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
