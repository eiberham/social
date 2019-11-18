//import { action } from 'typesafe-actions';

export interface IAction {
    type: string
    payload?: any
}

export enum Types {
    USER_LOGIN_REQUEST = 'user/login_request',
    USER_LOGIN_SUCCESS = 'user/login_success'
};

export const userLoginRequest = (): IAction => {
    console.log("acaaa ");
    return {
        type: Types.USER_LOGIN_REQUEST,
        payload: {
            username: 'acedeno', password: 'acedeno'
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