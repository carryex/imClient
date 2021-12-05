import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useNavigate} from 'react-router-dom';
import {APP_ROUTES} from '../../routes';

const SetsListTopBar = () => {
  const navigate = useNavigate();
  const onAddClickHandler = () => {
    navigate(APP_ROUTES.CREATE);
  };

  const onBackClickHandler = () => {
    navigate(-1);
  };
  return (<>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      sx={{mr: 2}}
      onClick={onBackClickHandler}
    >
      <ArrowBackOutlinedIcon />
    </IconButton>
    <Typography variant="h6"
      component="div"
      align='center'
      sx={{flexGrow: 1}}>
            Sets
    </Typography>
    <IconButton
      size="large"
      edge="end"
      color="inherit"
      onClick={onAddClickHandler}
    >
      <AddOutlinedIcon />
    </IconButton>
  </>);
};

export {SetsListTopBar};
