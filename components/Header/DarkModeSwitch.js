'use client';

import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '@/theme/ThemeProvider';

export default function DarkModeSwitch() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
      {theme.palette.mode === 'dark' ? (
        <LightModeIcon />
      ) : (
        <DarkModeIcon />
      )}
    </IconButton>
  );
}
