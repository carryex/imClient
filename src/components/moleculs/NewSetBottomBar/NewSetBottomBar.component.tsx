import React from 'react';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {useAppDispatch} from '../../../hooks';
import {addCardToDraft} from '../../../redux/slices/sets.slice';

const NewSetBottomBar = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addCardToDraft());
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <IconButton
        size="large"
        color="inherit"
        sx={{mr: 2}}
        onClick={handleClick}
      >
        <AddCircleOutlinedIcon/>
      </IconButton>
    </Box>
  );
}
;


export {NewSetBottomBar};
