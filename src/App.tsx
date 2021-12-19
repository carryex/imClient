import React from 'react';
import {ThemeProvider} from '@mui/material/styles';

import useTheme from './hooks/useTheme';
import authentication from './hooks/useAuth';
import {AppRoutes} from './components/routes/Routes.component';

const App = () => {
  const {theme} = useTheme();
  authentication();
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export {App};
