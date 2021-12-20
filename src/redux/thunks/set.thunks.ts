import {createAsyncThunk} from '@reduxjs/toolkit';
import {SetDataService} from '../../services/firebase/SetDataService';
import {Set} from '../types/set.types';

interface Payload {
  set: Set;
  userId: string;
}
const createSet = createAsyncThunk(
    'set/create',
    async ({set, userId}: Payload, thunkAPI) => {
      try {
        const rest = await SetDataService.create(set, userId);
        return rest;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    },
);

export {createSet};
