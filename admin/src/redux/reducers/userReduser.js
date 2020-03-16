import { LOGIN } from '../actions/actionTypes';


const initialState = {
  isLoggedIn: false,
  token: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { token } = action.payload;
      return { isLoggedIn: true, token };
    }
    default:
      return state;
  }
}
