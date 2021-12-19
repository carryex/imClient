import {createTheme, responsiveFontSizes, Theme} from '@mui/material/styles';
import React from 'react';

const baseTheme = responsiveFontSizes(createTheme());

const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
  },
}));

const useTheme = () => {
  const [theme, setTheme] = React.useState<Theme>(baseTheme);
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
  React.useEffect(()=>{
    setTheme(matchMedia.matches ? darkTheme : baseTheme);

    matchMedia.addEventListener('change', () => {
      setTheme(matchMedia.matches ? darkTheme : baseTheme);
    });
  }, []);
  return {
    theme,
  };
};

export default useTheme;
