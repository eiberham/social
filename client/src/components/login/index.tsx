import * as React from 'react';
import { useState, useEffect } from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { authErrorSelector, authSelector } from '../../selectors';
import useForm from 'react-hook-form';
import { Form, Button, Message, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { userLoginRequest } from '../../actions/auth';

export interface LoginProps {
    authenticated: boolean,
    error: string,
    userLoginRequest: (username: string, password: string) => any;
    history: any
}

const Component: React.FC<LoginProps> = props => {
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, errors } = useForm(); console.log("login props: ", props);
    const { error, authenticated } = props;

    useEffect(() => {
        if(authenticated)
            props.history.push("/panel");
    }, [authenticated]);

    useEffect(() => {
        if(error !== null)
            setVisible(true);
    }, [error])
    

    const onSubmit = ({ username, password }) => {
        props.userLoginRequest(username, password);
    };

    const onDismiss = () => setVisible(false);

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className="login">
            <div className="login__form">
                { visible ? <Message error
                    onDismiss={onDismiss}
                    header='Error'
                    content={`${error}`}
                /> : ''}
                <h2>Login</h2>
                <div>
                    Don't have an account yet ? <Link to="/signup">Sign up</Link>
                </div>
                <h5>Please, enter your access credentials to log into social</h5>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Form.Field required>
                        <label>Username</label>
                        <input 
                            name="username" 
                            placeholder="Username" 
                            ref={register({ required: true })} />
                            {errors.username && 'Username is required.'}
                    </Form.Field>

                    <Form.Field required>
                        <label>Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            autoComplete="current-password"
                            ref={register({ required: true })} />
                            {errors.password && 'Password is required.'}
                    </Form.Field>

                    <Button type="submit" color="red" fluid>
                        Log In
                    </Button>
                </Form>

                <Divider horizontal>Or</Divider>

                <GoogleLogin
                    clientId="611435266062-0oqhm1gf59fl3paeg5ru18fbkhcqn44d.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button color='blue' fluid onClick={renderProps.onClick}>
                            <Icon name='google' /> Log In with Google
                        </Button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    )
};

const mapStateToProps = state => ({ 
    error: authErrorSelector(state),
    authenticated: authSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        userLoginRequest
    }, dispatch)
}

const Login = connect(mapStateToProps, mapDispatchToProps)(Component)

export { Login };