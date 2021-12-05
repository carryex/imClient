import React from 'react';
import Paper from '@mui/material/Paper';

interface Props {
  children: JSX.Element;
}
const BottomBar = ({children}: Props) =>
  <Paper
    sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
    elevation={3}
  >
    {children}
  </Paper>;

export {BottomBar};
