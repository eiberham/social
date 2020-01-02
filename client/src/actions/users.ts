import { Types } from '../constants';

export interface IAction {
    type: string
    payload?: any
}

export const userChangePasswordRequest = (id, current, password, repeat): IAction => {
    return {
        type: Types.USER_CHANGE_PASSWORD_REQUEST,
        payload: {
            id, 
            current,
            password,
            repeat
        }
    }
};

export const userChangePasswordSuccess = (): IAction => {
    return {
        type: Types.USER_CHANGE_PASSWORD_SUCCESS,
        payload: {
            message: 'Password change done'
        }
    }
}

export const userChangePasswordError = ({ message }): IAction => {
    return { 
        type: Types.USER_CHANGE_PASSWORD_ERROR,
        payload: {
            message
        }
    }
}