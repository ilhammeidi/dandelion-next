import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from './header-style';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const [ctn, setCtn] = useState(null);
  const { classes, cx } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { invert } = props;

  return (
    <div className={classes.setting}>
      <IconButton
        aria-describedby={id}
        aria-label="Settings"
        onClick={handleClick}
        className={
          cx(
            classes.icon,
            open && classes.active,
            invert && classes.invert
          )
        }
        size="large"
      >
        <SettingsIcon fontSize="inherit" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={ctn}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List
          component="nav"
          className={classes.modeMenu}
          aria-label="Mode-menu"
          subheader={(
            <ListSubheader component="div">
              Theme
            </ListSubheader>
          )}
        >
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Light</Grid>
                <Grid item>
                  <Switch
                    checked={isDark}
                    onChange={handleChangeMode}
                    value={isDark}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>Dark</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
      </Popover>
    </div>
  );
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Settings.defaultProps = {
  invert: false
};

export default Settings;
