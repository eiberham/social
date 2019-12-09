import * as React from 'react';
import { useState } from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import useForm from 'react-hook-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { userLoginRequest } from '../../actions/auth';

export interface LoginProps {
    error: string,
    userLoginRequest: (username: string, password: string) => any;
    history: any
}

const Component: React.FC<LoginProps> = props => {
    const [visible, setVisible] = useState(true);
    const { register, handleSubmit, errors } = useForm(); console.log("login props: ", props);
    const { error } = props;

    const onSubmit = ({ username, password }) => {
        props.userLoginRequest(username, password);
        props.history.push("/panel");
    };

    const onDismiss = () => setVisible(false);

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Form.Field>
                        <label>Username</label>
                        <input 
                            name="username" 
                            placeholder="Username" 
                            ref={register({ required: true })} />
                            {errors.username && 'Username is required.'}
                    </Form.Field>

                    <Form.Field>
                        <label>Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            autoComplete="current-password"
                            ref={register({ required: true })} />
                            {errors.password && 'Password is required.'}
                    </Form.Field>

                    <Button type="submit" color="red">
                        Log In
                    </Button>
                </Form>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({ error: state.error});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        userLoginRequest
    }, dispatch)
}

const Login = connect(mapStateToProps, mapDispatchToProps)(Component)

export { Login };