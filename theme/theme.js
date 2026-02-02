'use client';
import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   colorSchemes: {
//     dark: true,
//   },
//   typography: {
//     fontFamily: 'var(--font-roboto)',
//   },
// });

export function getTheme(mode) {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      }),
    },
  });
}


// export default theme;