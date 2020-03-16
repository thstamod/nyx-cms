import { combineReducers } from 'redux';
import userReducer from './userReduser';

export default combineReducers({ user: userReducer });
