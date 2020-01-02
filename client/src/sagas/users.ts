import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users';
import { Types } from '../constants';
import api from '../api';

function* changePassword(action: actions.IAction){
    const { id } = action.payload;
    try {
        yield call(api.post, `/${id}/change_password`, action.payload);
        yield put(actions.userChangePasswordSuccess());
    } catch(error) {
        const { message } = error.response.data;
        yield put(actions.userChangePasswordError({ message }));
    }
}

export function* watchUserChangePasswordRequest() {
    yield takeEvery(Types.USER_SIGNUP_REQUEST, changePassword);
}

const userSagas = [
    fork(watchUserChangePasswordRequest),
];

export default userSagas;