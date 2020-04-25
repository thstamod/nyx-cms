import { LOGIN, LOGOUT, GET_FROM_SESSION_STATE } from '../actions/actionTypes';
import { setSessionStorage } from '../../utils/handleSessionStorage';

export const initialState = {
  isLoggedIn: false,
  token: '',
  tokenExpiration: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { token, tokenExpiration } = action.payload;
      setSessionStorage('user', {
        ...state,
        isLoggedIn: true,
        token,
        tokenExpiration,
      });
      return { ...state, isLoggedIn: true, token, tokenExpiration };
    }
    case LOGOUT: {
      return { ...initialState };
    }
    case GET_FROM_SESSION_STATE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
