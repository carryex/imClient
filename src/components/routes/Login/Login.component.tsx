import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {useNavigate, useLocation} from 'react-router-dom';
import {isUserAuthenticatedSelector} from '../../../redux/selectors/auth';
import {Link} from 'react-router-dom';
import {APP_ROUTES} from '..';
import MuiLink from '@mui/material/Link';
import {login, Provider} from '../../../redux/thunks/auth.thunks';


const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useAppSelector(isUserAuthenticatedSelector);
  // @ts-ignore
  const from = location.state?.from?.pathname || '/';
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleGoogleClick = () => {
    const userData = {
      displayName: null,
      email: null,
      provider: Provider.Google,
    };
    dispatch(login(userData));
  };

  const hanldeEmailAndPasswordClick = () => {
    const userData = {
      email,
      password,
      provider: Provider.Email,
    };
    dispatch(login(userData));
  };

  useEffect(()=>{
    if (isAuthenticated) {
      navigate(from, {replace: true});
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
        Welcome to interval memorization
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
        onClick={hanldeEmailAndPasswordClick}
        sx={{mt: 1}}>
          Log in
      </Button>
      <Button
        onClick={handleGoogleClick}
        startIcon={<GoogleIcon />}
        sx={{mt: 1, mb: 2}}>
        Sign in with Google
      </Button>
      <Typography variant="body1">
        No account?
        <MuiLink
          underline="none"
          variant="body1"
          component={Link}
          to={`/${APP_ROUTES.REGISTER}`}
          sx={{cursor: 'pointer'}}> Create one</MuiLink>
      </Typography>
    </Box>);
};

export {Login};
