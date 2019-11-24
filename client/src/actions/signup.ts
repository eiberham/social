import { Types } from '../constants';

import { IAction } from './auth';

export const userSignUpRequest = (
    name: string, 
    email: string, 
    username: string, 
    password: string
    ): IAction => {
        return {
            type: Types.USER_LOGIN_REQUEST,
            payload: {
                name, email, username, password
            }
        }
};

export const userSignUpSuccess = (): IAction => ({
    type: Types.USER_LOGIN_SUCCESS
});