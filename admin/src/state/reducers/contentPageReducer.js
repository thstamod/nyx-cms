import { SELECTED_DOCTYPE_CONTENT_PAGE } from '../actions/actionTypes';

export const initialState = {
  id: null,
};

export function contentPageReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_DOCTYPE_CONTENT_PAGE: {
      return { ...initialState, ...action.payload };
    }
    default:
      return state;
  }
}
