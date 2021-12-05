import React from 'react';
import {Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

import {APP_ROUTES} from '..';
import {useAppSelector} from '../../../hooks';
import {SetsPreview} from '../../organisms/SetsPreview';

const Home = () => {
  const sets = useAppSelector((state) => state.sets.collection);
  if (sets.length !== 0) {
    return (<SetsPreview sets={sets}/>);
  }
  return (
    <>
      <Greetings/>
      <CreateAction/>
    </>);
};

const Greetings = () =>
  <Box
    bgcolor="primary.main"
    pt={1} pb={6} mb={-2} px={2}
    color='primary.contrastText'>
    <Typography align='center' variant='subtitle1'>
        Hey Carryex
    </Typography>
    <Typography align='center' variant='h4'>
      How do you want to get started?
    </Typography>
  </Box>;

const CreateAction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate(`${APP_ROUTES.SETS}/create`);
    }, 300);
  };
  return (
    <Box mx={2}>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardContent>
            <Typography align='left' variant='h5'gutterBottom >
              Create
            </Typography>
            <Typography
              align='left' variant='body1' color='text.secondary' gutterBottom >
              Study material
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export {Home};
