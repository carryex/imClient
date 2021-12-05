import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


interface Props {
  children: JSX.Element
}
const TopBar = ({children}:Props) =>
  <Box sx={{flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  </Box>;

export {TopBar};
