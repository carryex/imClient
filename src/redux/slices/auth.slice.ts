import {
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import {login, logout, register} from '../thunks/auth.thunks';


interface AuthState {
  displayName?: string | null;
  email?: string | null;
  authenticated?: boolean;
  error?: SerializedError;
}

const initialState: AuthState = {
  displayName: undefined,
  email: undefined,
  authenticated: undefined,
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.authenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authenticated = false;
      state.displayName = initialState.displayName;
      state.email = initialState.email;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export type {AuthState};
export const {} = authSlice.actions;

export default authSlice.reducer;
