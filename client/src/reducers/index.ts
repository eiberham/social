import { combineReducers } from 'redux';
import authReducer from './auth';
import signUpReducer from './register';
import eventsReducer from './events';
import usersReducer from './users';

export default combineReducers({
    auth: authReducer,
    register: signUpReducer,
    events: eventsReducer,
    users: usersReducer
});