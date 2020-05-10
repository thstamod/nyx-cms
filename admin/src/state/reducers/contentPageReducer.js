import {
  SELECTED_DOCTYPE_CONTENT_PAGE,
  CHANGES_DATATYPES,
} from '../actions/actionTypes';

export const initialState = {
  id: null,
  datatypes: null,
};

export function contentPageReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_DOCTYPE_CONTENT_PAGE: {
      return { ...initialState, ...action.payload };
    }
    case CHANGES_DATATYPES: {
      console.log(action.payload);
      return { ...initialState, ...action.payload };
    }
    default:
      return state;
  }
}
