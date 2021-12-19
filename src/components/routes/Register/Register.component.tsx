import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import MuiLink from '@mui/material/Link';
import {Link, useNavigate} from 'react-router-dom';
import {APP_ROUTES} from '..';
import {isUserAuthenticatedSelector} from '../../../redux/selectors/auth';
import {Provider, register} from '../../../redux/thunks/auth';

const Register = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(isUserAuthenticatedSelector);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    const userData = {
      email,
      password,
      provider: Provider.Email,
    };
    dispatch(register(userData));
  };

  React.useEffect(()=>{
    if (isAuthenticated) {
      navigate(APP_ROUTES.HOME, {replace: true});
    }
  }, [isAuthenticated]);

  return (
    <Box sx={{
      px: 2,
      display: 'flex',
      flexDirection: 'column',
      mt: 4,
    }}>
      <Typography variant="h3" gutterBottom>
        Sign up with email
      </Typography>

      <TextField
        name="email"
        label="Enter your email"
        helperText="EMAIL"
        variant="standard"
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        name="password"
        label="Enter your password"
        helperText="PASSWORD"
        variant="standard"
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleButtonClick}
        sx={{mt: 1, mb: 2}}>
          Sign up
      </Button>
      <Typography variant="body1">
        Alreade have an account?
        <MuiLink
          underline="none"
          variant="body1"
          component={Link}
          to={`/${APP_ROUTES.LOGIN}`}
          sx={{cursor: 'pointer'}}> Sign in</MuiLink>
      </Typography>
    </Box>);
};

export {Register};
