import {createSelector} from 'reselect';
import {AuthState} from '../slices/auth.slice';
import {RootState} from '../store';

const authSelector: (state: RootState) => AuthState = (
    state: RootState,
) => state.auth;

const displayNameSelector = createSelector(authSelector, (auth) => {
  return auth.displayName;
});

const emailSelector = createSelector(authSelector, (auth) => {
  return auth.email;
});

const isUserAuthenticatedSelector = createSelector(
    authSelector,
    (auth) => {
      return auth.authenticated;
    },
);

const errorSelector = createSelector(authSelector, (auth) => {
  return auth.error;
});

export {
  authSelector,
  displayNameSelector,
  emailSelector,
  isUserAuthenticatedSelector,
  errorSelector,
};
