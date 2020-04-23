import { LOGIN, LOGOUT } from '../actions/actionTypes';

export const initialState = {
  isLoggedIn: false,
  token: '',
  tokenExpiration: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { token, tokenExpiration } = action.payload;
      return { ...state, isLoggedIn: true, token, tokenExpiration };
    }
    case LOGOUT: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
