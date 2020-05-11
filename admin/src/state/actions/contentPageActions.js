import {
  SELECTED_DOCTYPE_CONTENT_PAGE,
  SET_ALL_DATATYPES,
  SET_DATATYPE,
} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const selectDocType = (id) => ({
  type: SELECTED_DOCTYPE_CONTENT_PAGE,
  payload: { id },
});

export const setAllDataTypes = (data) => ({
  type: SET_ALL_DATATYPES,
  payload: data,
});

export const setDataType = (data) => ({
  type: SET_DATATYPE,
  payload: data,
});
