import { LOGIN } from "./actionTypes";

export const loginAction = token => ({
  type: LOGIN,
  payload: { token }
});
