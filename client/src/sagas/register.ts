import { takeLatest, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/register';
import { Types } from '../constants';
import { IAction } from '../actions/auth';
import api from '../api';


function* userSignUp(action: IAction){
    //debugger;
    try {
        //debugger;
        const { data } = yield call(api.post, '/register', action.payload);
        console.log("response: ", data);
        yield put(actions.userSignUpSuccess());
    } catch({message}) {
        yield put(actions.userSignUpError({error: message}))
    }
}

export function* watchUserSignUpRequest() {
    yield takeEvery(Types.USER_SIGNUP_REQUEST, userSignUp);
}

const registerSagas = [
    fork(watchUserSignUpRequest),
];

export default registerSagas;