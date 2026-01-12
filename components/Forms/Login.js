import React, { useState, useEffect } from 'react';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import routeLink from 'public/text/link';
import Link from '../Link';
import SocialAuth from './SocialAuth';
import Title from '../Title/TitleSecondary';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';

function Login() {
  const { classes, cx } = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return (
    <AuthFrame title="Login" subtitle="Login Subtitle">
      <div>
        <div className={classes.head}>
          <Title align="left">
            Login
          </Title>
          <Button component={Link} size="small" className={classes.buttonLink} href={routeLink.starter.register}>
            <Icon className={cx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
            Create Account
          </Button>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>
            Or
          </Typography>
        </div>
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label="Email"
                onChange={handleChange('email')}
                name="email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label="Password"
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
          </Grid>
          <div className={classes.formHelper}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              )}
              label={(
                <span>
                  Remember me
                </span>
              )}
            />
            <Button size="small" className={classes.buttonLink} href="#">
              Forgot Password
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth type="submit" color="secondary" size="large">
              Continue
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </AuthFrame>
  );
}

export default Login;
