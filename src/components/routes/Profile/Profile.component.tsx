import {Button} from '@mui/material';
import React from 'react';
import {useAppDispatch} from '../../../hooks/redux';
import {logout} from '../../../redux/thunks/auth';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (<Button onClick={handleLogoutClick}>Log out</Button>);
};

export {Profile};
