import React from 'react';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import {Typography} from '@mui/material';
import {Set} from '../../../redux/types/sets';
import {SetCard} from '../../moleculs/SetCard';
import {HorizontalScroller} from '../../moleculs/HorizontalScroller';
import {APP_ROUTES} from '../../routes';

interface Props {
  sets: Set[]
}
const SetsPreview = ({sets}:Props) => {
  const setsJSX = sets.map((set)=><SetCard set={set} key={set.id}/>);
  return (<Box mt={2}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 2,
        px: 2,
      }}>
      <Typography variant="subtitle2">Sets</Typography>
      <MuiLink
        underline="none"
        variant="subtitle2"
        component={Link}
        to={`${APP_ROUTES.SETS}`}
        sx={{cursor: 'pointer'}}>View all</MuiLink>
    </Box>
    <HorizontalScroller childs={setsJSX} gap={0}/>
  </Box>);
};

export {SetsPreview};
