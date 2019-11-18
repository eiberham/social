import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import api from '../api';

function* userLogin(action: actions.IAction){
    const response = yield call(api.post, '/login', action.payload);
    console.log("response: ", response);
    yield put(actions.userLoginSuccess({
        token: response.data.data
    }));
}

export function* watchUserLoginRequest() {
    yield takeLatest(actions.Types.USER_LOGIN_REQUEST, userLogin);
}

const authSagas = [
    fork(watchUserLoginRequest)
];

export default authSagas;