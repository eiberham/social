import { Types } from '../constants';

import { IAction } from './auth';

export const userSignUpRequest = (
    name: string, 
    email: string, 
    country: string,
    username: string, 
    password: string,
    repeat: string,
    token: string
    ): IAction => {
        return {
            type: Types.USER_SIGNUP_REQUEST,
            payload: {
                name, email, country, username, password, repeat, token
            }
        }
};

export const userSignUpSuccess = (): IAction => ({
    type: Types.USER_SIGNUP_SUCCESS,
    payload: {
        message: 'Registration complete'
    }
});

export const userSignUpError = ({ message }): IAction => ({
    type: Types.USER_SIGNUP_ERROR,
    payload: { message }
});