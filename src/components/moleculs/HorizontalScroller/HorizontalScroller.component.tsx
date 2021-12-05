import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  childs: JSX.Element[];
  gap?: number;
}
const HorizontalScroller = ({childs, gap = 2}:Props) => {
  const childsJSX = childs.map((child)=>
    <Box key={child.key} sx={{flexShrink: 0, flexBasis: '80%'}}>
      {child}
    </Box>,
  );
  return (
    <Box gap={gap} sx={{display: 'flex', overflowX: 'scroll'}}>
      {childsJSX}
    </Box>)
  ;
};

export {HorizontalScroller};
