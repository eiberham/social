//import { action } from 'typesafe-actions';

export interface IAction {
    type: string
    payload?: any
}

export enum Types {
    USER_LOGIN_REQUEST = 'user/login_request',
    USER_LOGIN_SUCCESS = 'user/login_success',
    USER_LOGOUT = 'user/logout'
};

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

export const userLogout = (): IAction => ({
    type: Types.USER_LOGOUT,
    payload: {
        token: null,
        authenticated: false
    }
});