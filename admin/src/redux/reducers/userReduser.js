import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  token: '',
  tokenExpiration: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { token, tokenExpiration } = action.payload;
      return { isLoggedIn: true, token, tokenExpiration };
    }
    case LOGOUT: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
