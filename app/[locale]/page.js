'use client';

import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Footer from '@/components/Footer/Footer';
import DarkModeSwitch from '@/components/Header/DarkModeSwitch';
import ColorPaletteSwitch from '@/components/Header/ColorPaletteSwitch';
import LangSwitch from '@/components/Header/LangSwitch';
import Counter from '@/components/Counter/Counter';
import styles from '@/app/page.module.css';

export default function Home() {
  const t = useTranslations('HomePage');

  function handleClick() { 
    console.log('Tombol telah diklik2');
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container maxWidth='sm'>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js logo'
            width={100}
            height={20}
            priority
          />
          <div className={styles.intro}>
            <h1>{t('title')}</h1>
            <LangSwitch />
            <h1>Kocak To get started, edit the page.js file.</h1>
            <TextField label="Enter text" variant="outlined" fullWidth />
            <Alert icon={<CheckIcon fontSize="inherit" className={styles.checkIcon} />} severity="success">
              Here is a gentle confirmation that your action was successful.
            </Alert>
            <button onClick={() => handleClick()}>
              Klik Saya
            </button>
            <DarkModeSwitch />
            <ColorPaletteSwitch />
            <p>
              Looking for a starting point or more instructions? Head over to{' '}
              <a
                href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                Templates
              </a>{' '}
              or the{' '}
              <a
                href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learning
              </a>{' '}
              center.
            </p>
          </div>
          <Counter />
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className={styles.logo}
                src='/vercel.svg'
                alt='Vercel logomark'
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className={styles.secondary}
              href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Documentation
            </a>
          </div>
          <Footer />
        </Container>
      </main>
    </div>
  );
}
