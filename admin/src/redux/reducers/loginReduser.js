import { LOGIN } from "../actions/actionTypes";


const initialState = {
  token: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { token } = action.payload;
      return { token };
    }
    default:
      return state;
  }
}
