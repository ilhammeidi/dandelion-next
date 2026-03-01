'use client';
import { createTheme } from '@mui/material/styles';

export function getTheme(mode, palette) {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      }),
      ...palette
    }
  });
}


// export default theme;