import {
  SELECTED_DOCTYPE_CONTENT_PAGE,
  SET_ALL_DOCTYPE_DATA,
  SET_DATATYPE,
  REMOVE_DATATYPE_FROM_DOCTYPE,
} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const selectDocType = (id) => ({
  type: SELECTED_DOCTYPE_CONTENT_PAGE,
  payload: { id },
});

export const setAllDataTypes = (data) => ({
  type: SET_ALL_DOCTYPE_DATA,
  payload: data,
});

export const setDataType = (data) => ({
  type: SET_DATATYPE,
  payload: data,
});

export const removeDataTypeFromDocType = (data) => ({
  type: REMOVE_DATATYPE_FROM_DOCTYPE,
  payload: data,
});
