import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {updateDraft} from '../../../redux/slices/sets.slice';


const NewSetForm = () => {
  const draft = useAppSelector((state) => state.sets.draft);
  const dispatch = useAppDispatch();

  const handleChange = (
      event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      id?: string,
  ) => {
    const {name, value} = event.currentTarget;
    dispatch(updateDraft({id, name, value}));
  };

  const setHeaderFieldsJSX =
    <Box
      mx={1}
      mt={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        name="title"
        label="Subject, chapter, unit"
        helperText="TITLE"
        variant="standard"
        onChange={handleChange}
      />
      <TextField
        name="description"
        label="Brief description of the set"
        helperText="DESCRIPTION"
        variant="standard"
        onChange={handleChange}
      />
    </Box>;


  const setCardFieldsJSX = draft.cards.map(({id}) =>
    <Paper elevation={2} key={id}>
      <Box
        px={1}
        py={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          helperText="TERM"
          name="term"
          variant="standard"
          onChange={(event) => handleChange(event, id)}
        />
        <TextField
          helperText="DEFINITION"
          name="definition"
          variant="standard"
          onChange={(event) => handleChange(event, id)}
        />
      </Box>
    </Paper>);

  return (
    <Box
      mx={1}
      sx={{
        display: 'grid',
        gridTemplateColumns: {md: '1fr 1fr'},
        gap: 2,
      }}
      component="form"
    >
      {setHeaderFieldsJSX}
      {setCardFieldsJSX}
    </Box>
  );
};

export {NewSetForm};
