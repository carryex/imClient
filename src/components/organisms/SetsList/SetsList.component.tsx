import React from 'react';
import {useAppSelector} from '../../../hooks';
import {SetCard} from '../../moleculs/SetCard';
import Box from '@mui/material/Box';

const SetsList = () => {
  const sets = useAppSelector((state) => state.sets.collection);
  const setsJSX = sets.map((set) => <SetCard key={set.id} set={set}/>);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      mt: 2,
      gap: 2,
      mx: 2,
    }}>
      {setsJSX}
    </Box>);
};

export {SetsList};
