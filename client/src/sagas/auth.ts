import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import api from '../api';

function* auth({ type, payload }){
    console.log("llamando al auth papa");
    try {
        const response = yield call(api.post, '/login', payload);
        console.log("response: ", response);
		//yield put();
    }catch(e){
        console.log("error: ", e);
    }
}

function* watchUserLoginRequest() {
    console.log("watching login requests");
    yield takeEvery(actions.Types.USER_LOGIN_REQUEST, auth);
}

const authSagas = [
    fork(watchUserLoginRequest)
];

export default authSagas;