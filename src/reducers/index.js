import { combineReducers } from 'redux';
import { takeawayReducer } from './takeawayReducer';
import { authenticationReducer } from './authenticationReducer';

export default combineReducers({ takeawayReducer, authenticationReducer, })