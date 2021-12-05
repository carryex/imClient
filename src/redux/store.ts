import {configureStore} from '@reduxjs/toolkit';
import sets from './slices/sets.slice';

const store = configureStore({
  reducer: {
    sets,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
