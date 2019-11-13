import { Action } from 'redux';
import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as api from '../api';

function* auth({type, payload}){
    try {
        const response = yield call(api.post('/login'), payload);
		//yield put();
    }catch(e){
 
    }
}

function* watchUserLoginRequest() {
    yield takeEvery(actions.Types.USER_LOGIN_REQUEST, auth);
}

const authSagas = [
    fork(watchUserLoginRequest)
];

export default authSagas;