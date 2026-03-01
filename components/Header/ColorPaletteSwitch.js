'use client';

import React, { Fragment, useContext } from 'react';
import { Button } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '@/theme/ThemeProvider';

export default function ColorPaletteSwitch() {
  // const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Fragment>
      <Button onClick={() => colorMode.changeColorScheme('sporty')}>Change Color Sporty</Button>
      <Button onClick={() => colorMode.changeColorScheme('oceanBlue')}>Change Color Ocean Blue</Button>
    </Fragment>
  );
}
