import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {addSet} from '../../../redux/slices/set';

const Decks = () => {
  const decks = useAppSelector((state) => state.sets.collection);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get('title');
    if (typeof title === 'string') {
      dispatch(addSet(title));
    };
  };

  const isEmpty = decks.length===0;

  return (
    <>
      <Typography variant="h1" component="h1">Your decks</Typography>
      {isEmpty &&
        <Typography variant="h4" component="h4">
          List of decks is empty
        </Typography>}
      {!isEmpty && <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Title"
          name='title'
          id='title'
          variant="outlined"
          size='small'
          required/>
        <Button type="submit">Add deck</Button>
        {decks}
      </Box>}

    </>);
};

export {Decks};
