import React from 'react';
import {isUserAuthenticatedSelector} from '../redux/selectors/auth';
import {useAppDispatch, useAppSelector} from './redux';
import {authStateChanged} from '../services/firebase/auth';
import {login, logout} from '../redux/thunks/auth.thunks';

const Auth = () => {
  const authenticated = useAppSelector(isUserAuthenticatedSelector);
  const dispatch = useAppDispatch();

  const refreshCallback = React.useCallback(
      async (displayName: string | null, email: string | null) => {
        const userData = {
          displayName,
          email,
        };
        return dispatch(login(userData));
      }, [dispatch]);

  const logoutCallback = () => {
    dispatch(logout());
  };

  React.useEffect(() => {
    authStateChanged(refreshCallback, logoutCallback, authenticated);
  }, []);
};

export default Auth;
