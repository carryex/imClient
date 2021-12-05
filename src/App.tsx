import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

import {APP_ROUTES} from './components/routes';
import {MobileLayout} from './components/organisms/MobileLayout';
import {Home} from './components/routes/Home/Home.components';
import {Sets} from './components/routes/Sets/Sets.component';
import {NewSetForm} from './components/organisms/NewSetForm';
import {Set} from './components/organisms/Set';
import {SetsList} from './components/organisms/SetsList';

const theme = responsiveFontSizes(createTheme());

const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
  },
}));

const App = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
  useEffect(()=>{
    setIsDark(matchMedia.matches);

    matchMedia.addEventListener('change', (e) => {
      setIsDark(e.matches);
    });
  }, []);


  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <Routes>
        <Route path='/' element={<MobileLayout />}>
          <Route index element={<Home />} />
          <Route path={APP_ROUTES.SETS+ '/*'} element={<Sets />} >
            <Route index element={<SetsList/>}/>
            <Route path="create" element={< NewSetForm />} />
            <Route path=":setId" element={<Set/>}/>
          </Route>
          <Route
            path="*"
            element={
              <main style={{padding: '1rem'}}>
                <p>Theres nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export {App};
