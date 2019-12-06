import { Types } from '../constants';

import { IAction } from './auth';

export const userSignUpRequest = (
    name: string, 
    email: string, 
    country: string,
    username: string, 
    password: string
    ): IAction => {
        return {
            type: Types.USER_SIGNUP_REQUEST,
            payload: {
                name, email, country, username, password
            }
        }
};

export const userSignUpSuccess = (): IAction => ({
    type: Types.USER_SIGNUP_SUCCESS,
    payload: {
        message: 'Registration complete'
    }
});