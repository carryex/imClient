import React from 'react';
import {Outlet} from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import {Routes, Route} from 'react-router-dom';
import {TopBar} from '../../moleculs/TopBar';
import {HomeTopBar} from '../../moleculs/HomeTopBar';
import {BottomBar} from '../../moleculs/BottomBar';
import {MobileBottomBar} from '../MobileBottomBar';
import {APP_ROUTES} from '../../routes';
import {NewSetTopBar} from '../../moleculs/NewSetTopBar';
import {NewSetBottomBar} from '../../moleculs/NewSetBottomBar';
import {SetsListTopBar} from '../../moleculs/SetsListTopBar';
import {SetTopBar} from '../../moleculs/SetTopBar';

const MobileLayout = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{pb: 7}} ref={ref}>
      <CssBaseline />
      <TopBar>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<HomeTopBar/>}/>
          <Route
            path={`${APP_ROUTES.SETS}/${APP_ROUTES.CREATE}`}
            element={<NewSetTopBar/>}/>
          <Route path={APP_ROUTES.SETS} element={<SetsListTopBar/>}/>
          <Route path={`${APP_ROUTES.SETS}/:setId`} element={<SetTopBar/>}/>
        </Routes>
      </TopBar>
      <Outlet/>
      <BottomBar>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<MobileBottomBar/>}/>
          <Route path={APP_ROUTES.PROFILE} element={<MobileBottomBar/>}/>
          <Route
            path={`${APP_ROUTES.SETS}/${APP_ROUTES.CREATE}`}
            element={<NewSetBottomBar/>}/>
        </Routes>
      </BottomBar>
    </Box>
  );
};


export {MobileLayout};
