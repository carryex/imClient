import React from 'react';
import {Card as CardType} from '../../../redux/types/sets.types';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography} from '@mui/material';

interface Props {
  card: CardType
}
const Card = ({card}: Props) => {
  return (
    <CardMui>
      <CardContent>
        <Typography align='center'>{card.term}</Typography>
      </CardContent>
    </CardMui>
  );
};

export {Card};
