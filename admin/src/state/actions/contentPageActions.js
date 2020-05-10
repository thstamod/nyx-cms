import { SELECTED_DOCTYPE_CONTENT_PAGE } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const selectDocType = (id) => ({
  type: SELECTED_DOCTYPE_CONTENT_PAGE,
  payload: { id },
});

export const changeDataType = (data) => ({
  type: SELECTED_DOCTYPE_CONTENT_PAGE,
  payload: { data },
});
