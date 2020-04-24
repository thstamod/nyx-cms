import { useEffect } from 'react';
import _ from 'lodash/lang';
import { GET_FROM_SESSION_STATE } from '../state/actions/actionTypes';
import { initialState } from '../state/reducers/userReducer';
import { getSessionStorage } from '../utils/handleSessionStorage';

export default (key, dispatch) => {
  useEffect(() => {
    const user = getSessionStorage(key);
    dispatch({
      type: GET_FROM_SESSION_STATE,
      payload: !_.isEmpty(user) ? user : initialState,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
