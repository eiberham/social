import { takeLatest, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import api from '../api';

function* userLogin(action: actions.IAction){
    try {
        const {data:{token}} = yield call(api.post, '/login', action.payload);
        yield put(actions.userLoginSuccess({
            token
        }));
    } catch(e) {
        //yield put(actions.errorResponse(e.message))
    }
}

function* userLogout(action: actions.IAction) {
    console.log("llamo al logout");
    yield put (actions.userLogout());
}

export function* watchUserLoginRequest() {
    yield takeLatest(actions.Types.USER_LOGIN_REQUEST, userLogin);
}

export function* watchUserLogout() {
    yield takeEvery(actions.Types.USER_LOGOUT, userLogout);
}

const authSagas = [
    fork(watchUserLoginRequest),
    fork(watchUserLogout)
];

export default authSagas;