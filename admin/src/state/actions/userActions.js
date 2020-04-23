import { LOGIN, LOGOUT } from './actionTypes';

export const loginAction = (token, tokenExpiration) => ({
  type: LOGIN,
  payload: { token, tokenExpiration },
});

export const logoutAction = () => ({
  type: LOGOUT,
});
