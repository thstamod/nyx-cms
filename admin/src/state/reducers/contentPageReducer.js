import {
  SELECTED_DOCTYPE_CONTENT_PAGE,
  SET_ALL_DATATYPES,
  SET_DATATYPE,
  REMOVE_DATATYPE_FROM_DOCTYPE,
} from '../actions/actionTypes';

export const initialState = {
  id: null,
  datatypes: null,
};

export function contentPageReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_DOCTYPE_CONTENT_PAGE: {
      return { ...state, ...action.payload };
    }
    case SET_ALL_DATATYPES: {
      const datatypes = { ...action.payload };
      return { ...state, datatypes, beforeChangesDataTypes: datatypes };
    }
    case SET_DATATYPE: {
      const datatypes = { ...state.datatypes, ...action.payload };
      return { ...state, datatypes };
    }
    case REMOVE_DATATYPE_FROM_DOCTYPE: {
      const datatypes = {
        ...state.datatypes,
        [action.payload]: { toBeDeleted: true },
      };
      return { ...state, datatypes };
    }
    default:
      return state;
  }
}
