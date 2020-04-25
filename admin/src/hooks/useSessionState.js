import { useEffect } from 'react';
import _ from 'lodash/lang';

import { getSessionStorage } from '../utils/handleSessionStorage';

export default (key, dispatch, initialState, action) => {
  useEffect(() => {
    const user = getSessionStorage(key);
    dispatch({
      type: action,
      payload: !_.isEmpty(user) ? user : initialState,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
