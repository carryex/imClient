import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {APP_ROUTES} from '.';
import {useAppSelector} from '../../hooks/redux';
import {isUserAuthenticatedSelector} from '../../redux/selectors/auth';

interface Props {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}: Props) => {
  const isAuthenticated = useAppSelector(isUserAuthenticatedSelector);
  const location = useLocation();

  if (isAuthenticated) {
    return <RouteComponent/>;
  }

  if (isAuthenticated === undefined) {
    return <>Loading</>;
  }

  return <Navigate to={APP_ROUTES.LOGIN} state={{from: location}}/>;
};

export {PrivateRoute};
