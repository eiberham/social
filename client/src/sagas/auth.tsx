import { Action } from 'redux';
import { takeEvery, call, fork, put } from 'redux-saga/effects';
//import {SagaIterator} from 'redux-saga';
import * as actions from '../actions/auth';
import * as api from '../api';

function* auth(username: string, password: string){
    try {

    }catch(e){

    }
}

/* function* watchUserLoginRequest() {
    yield takeEvery(actions.Types.USER_LOGIN_REQUEST, auth);
} */

const authSagas = [
    //fork(watchUserLoginRequest)
];

export default authSagas;