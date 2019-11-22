import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import api from '../api';

function* userLogin(action: actions.IAction){
    const {data:{token}} = yield call(api.post, '/login', action.payload);
    yield put(actions.userLoginSuccess({
        token
    }));
}

export function* watchUserLoginRequest() {
    yield takeLatest(actions.Types.USER_LOGIN_REQUEST, userLogin);
}

const authSagas = [
    fork(watchUserLoginRequest)
];

export default authSagas;