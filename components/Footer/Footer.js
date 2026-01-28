import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useStyles from './footer-style';

function Copyright() {
  return (
      <Typography  variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

function Footer(props) {
  const { toggleDir } = props;
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes } = useStyles();

  return (
    <Container maxWidth="lg" component="footer" className={clsx(classes.footer, classes.secondClass)}>
      <h2>Hello Footer</h2>
      {isMobile && (
        <div className={align.textCenter}>
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
