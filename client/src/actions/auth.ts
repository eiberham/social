//import { action } from 'typesafe-actions';

import { Types } from '../constants';

export interface IAction {
    type: string
    payload?: any
}

export const userLoginRequest = (username, password): IAction => {
    return {
        type: Types.USER_LOGIN_REQUEST,
        payload: {
            username, password
        }
    }
    //return action(Types.USER_LOGIN_REQUEST, { username: 'acedeno', password: 'acedeno'});
};

export const userLoginSuccess = ({ token }): IAction => ({
    type: Types.USER_LOGIN_SUCCESS,
    payload: {
        token
    }
});

export const userLogoutRequest = (): IAction => ({
    type: Types.USER_LOGOUT_REQUEST
});

export const userLogoutSuccess = (): IAction => ({
    type: Types.USER_LOGOUT_SUCCESS,
    payload: {
        token: null
    }
})