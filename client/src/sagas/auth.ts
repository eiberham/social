import { takeLatest, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import { Types } from '../constants';
import api from '../api';

function* userLogin(action: actions.IAction){
    try {
        const {data:{token}} = yield call(api.post, '/login', action.payload);
        yield put(actions.userLoginSuccess({
            token
        }));
    } catch({message}) {
        yield put(actions.userLoginError({ message }));
    }
}

function* userLogout() {
    yield put (actions.userLogoutSuccess());
}

export function* watchUserLoginRequest() {
    yield takeEvery(Types.USER_LOGIN_REQUEST, userLogin);
}

export function* watchUserLogoutRequest() {
    yield takeEvery(Types.USER_LOGOUT_REQUEST, userLogout);
}

const authSagas = [
    fork(watchUserLoginRequest),
    fork(watchUserLogoutRequest)
];

export default authSagas;