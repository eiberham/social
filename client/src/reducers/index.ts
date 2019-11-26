import { combineReducers } from 'redux';
import authReducer from './auth';
import signUpReducer from './register';

export default combineReducers({
    auth: authReducer,
    register: signUpReducer
});