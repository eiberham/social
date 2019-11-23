import { takeLatest, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/signup';
import api from '../api';

export const userRegisterRequest = (name, email, username, password): any => {
    return {
        type: 'USER_REGISTER_REQUEST',
        payload: {
            name, email, username, password
        }
    }
};

export const userRegisterSuccess = (): any => ({
    type: 'USER_REGISTER_SUCCESS'
});