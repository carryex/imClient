import React, {useEffect} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from
  '@mui/icons-material/AddCircleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import {useNavigate, useLocation} from 'react-router-dom';
import {APP_ROUTES} from '../../routes';

const MobileBottomBar = () => {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();
  const location = useLocation();


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  useEffect(()=> {
    ['/', 'add', 'profile'].forEach((route) => {
      if (location.pathname.includes(route)) {
        return setValue(route);
      }
    });
  }, [location.pathname]);


  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        value={'/'}
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Add"
        value={`${APP_ROUTES.SETS}/${APP_ROUTES.CREATE}`}
        icon={<AddCircleOutlineOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PermIdentityOutlinedIcon />}
      />
    </BottomNavigation>
  );
};

export {MobileBottomBar};
