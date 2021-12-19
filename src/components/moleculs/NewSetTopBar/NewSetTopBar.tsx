import React from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Typography from '@mui/material/Typography';
import {useAppDispatch} from '../../../hooks/redux';
import {saveDraft} from '../../../redux/slices/set';
import {useNavigate} from 'react-router-dom';
import {APP_ROUTES} from '../../routes';
import Link from '@mui/material/Link';

const NewSetTopBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(saveDraft());
    navigate(APP_ROUTES.HOME);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{mr: 2}}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <Typography variant="h6"
        component="div"
        align='center'
        sx={{flexGrow: 1}}>
            Create set
      </Typography>
      <Link
        underline="none"
        variant="subtitle2"
        onClick={handleClick}
        color="inherit"
        sx={{cursor: 'pointer'}}
      >Done
      </Link>
    </>
  );
};

export {NewSetTopBar};
