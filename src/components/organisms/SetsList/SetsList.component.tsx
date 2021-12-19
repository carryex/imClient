import React from 'react';
import {useAppSelector} from '../../../hooks/redux';
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
    }} className="asd{asd}">
      {setsJSX}
    </Box>);
};

export {SetsList};
