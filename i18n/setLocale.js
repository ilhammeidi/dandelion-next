'use server';

import {cookies} from 'next/headers';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function setUserLocale(locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}
