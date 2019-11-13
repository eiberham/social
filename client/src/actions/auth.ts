interface IAction {
    type: string
    payload?: any
}

export const Types = {
    USER_LOGIN_REQUEST: 'user/login_request',
    USER_LOGIN_SUCCESS: 'user/login_success'
};

export const userLoginRequest = ():IAction => ({
    type: Types.USER_LOGIN_REQUEST
});

export const userLoginSuccess = ({ token }):IAction => ({
    type: Types.USER_LOGIN_SUCCESS,
    payload: {
        token
    }
});