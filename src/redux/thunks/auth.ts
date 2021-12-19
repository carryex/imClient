import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  logInWithEmail,
  logInWithGoogle,
  logOut,
  registerWithEmail,
} from '../../services/firebase/auth';
import {AuthState} from '../slices/auth';

enum Provider {
  Google,
  Email
}

interface PayLoad {
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
  provider?: Provider;
}

const login = createAsyncThunk<AuthState, PayLoad>(
    'login',
    async (req, thunkAPI) => {
      try {
        if (req.provider === Provider.Google) {
          return await logInWithGoogle();
        }
        if (req.provider === Provider.Email && req.email && req.password) {
          return await logInWithEmail(req.email, req.password);
        }
        const displayName = req.displayName;
        const email = req.email;
        return {displayName, email} as PayLoad;
      } catch (error:any) {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    },
);

const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await logOut();
  } catch (error: any) {
    return thunkAPI.rejectWithValue({error: error.message});
  }
});


const register = createAsyncThunk<AuthState, PayLoad>(
    'register',
    async (req, thunkAPI) => {
      try {
        if (req.provider === Provider.Email && req.email && req.password) {
          return await registerWithEmail(req.email, req.password);
        }
        return thunkAPI.rejectWithValue({error: 'Invalid email or password'});
      } catch (error: any) {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    },
);
export {login, register, logout, Provider};
