import {configureStore} from '@reduxjs/toolkit';
import sets from './slices/set';
import auth from './slices/auth';

const store = configureStore({
  reducer: {
    sets,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
