'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useStyles from './footer-style';

function Copyright() { 
  return (
    <Typography  variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      brand.starter.footerText
    </Typography>
  );
}

function Footer() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes } = useStyles();

  return (
    <Container maxWidth="lg" component="footer" className={clsx(classes.footer, classes.secondClass)}>
      <h2>Hello Footer</h2>
      <Alert icon={<CheckIcon fontSize="inherit" className={classes.checkIcon} />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
      {isMobile && (
        <div>
          <Box p={4}>
            <Copyright />
          </Box>
        </div>
      )}
    </Container>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
