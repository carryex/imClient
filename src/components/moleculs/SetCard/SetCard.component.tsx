import React from 'react';
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import {useNavigate} from 'react-router-dom';
import {Set} from '../../../redux/types/sets';
import {APP_ROUTES} from '../../routes/routes';

interface Props {
  set: Set;
}
const SetCard = ({set}: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate(`/${APP_ROUTES.SETS}/${set.id}`);
    }, 300);
  };
  return (
    <Card onClick={handleClick} sx={{ml: 2}}>
      <CardActionArea>
        <CardContent>
          <Typography align='left' variant='h5'gutterBottom >
            {set.title}
          </Typography>
          <Typography
            align='left' variant='body1' color='text.secondary' gutterBottom >
            {set.cards.length} terms
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>);
};

export {SetCard};
