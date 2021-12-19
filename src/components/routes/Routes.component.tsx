import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {APP_ROUTES} from '.';
import {MobileLayout} from '../organisms/MobileLayout';
import {NewSetForm} from '../organisms/NewSetForm';
import {SetsList} from '../organisms/SetsList';
import {Home} from './Home';

import {Sets} from './Sets';
import {Set} from '../organisms/Set';
import {Profile} from './Profile';
import {Login} from './Login';
import {PrivateRoute} from './PrivateRoute.component';
import {Register} from './Register';

const AppRoutes: React.VFC = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.LOGIN} element={<Login/>} />
      <Route path={APP_ROUTES.REGISTER} element={<Register/>} />
      <Route path='/*' element={<PrivateRoute component={MobileLayout}/>}>
        <Route index element={<Home />} />
        <Route path={APP_ROUTES.SETS+ '/*'} element={<Sets />} >
          <Route index element={<SetsList/>}/>
          <Route path="create" element={< NewSetForm />} />
          <Route path=":setId" element={<Set/>}/>
        </Route>
        <Route path={APP_ROUTES.PROFILE} element={<Profile/>}/>
        <Route
          path="*"
          element={
            <main style={{padding: '1rem'}}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Route>
      {/* <Route index element={<Login/>} /> */}
      {/* <Route path='/landingpage' element={<LandingPage/>} /> */}
      {/* <Route element={<ErrorsPage/>} /> */}
    </Routes>
  );
};

export {AppRoutes};
