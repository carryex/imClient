import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useNavigate} from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Box from '@mui/material/Box';

const SetTopBar = () => {
  const navigate = useNavigate();

  const onBackClickHandler = () => {
    navigate(-1);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{mr: 2}}
        onClick={onBackClickHandler}
      >
        <ArrowBackOutlinedIcon />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
      >
        <MoreHorizOutlinedIcon />
      </IconButton>
    </Box>);
};

export {SetTopBar};
