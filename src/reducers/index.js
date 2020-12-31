import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    auth: AuthReducer,
    users: usersReducer
})