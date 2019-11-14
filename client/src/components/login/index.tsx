import * as React from 'react';
import "./styles.scss";
import { connect } from 'react-redux';

import useForm from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';

import { userLoginRequest } from '../../actions/auth';

export interface LoginProps {
    userLoginRequest: (username: string, password: string) => any;
}

const Component: React.FC<LoginProps> = props => {
    const { register, handleSubmit, errors } = useForm();
    const { userLoginRequest } = props;

    console.log("props de login: ", props);

    const onSubmit = ({ username, password }) => {
        console.log("submit was triggered");
        console.log("username: ", username);
        console.log("password: ", password);
        userLoginRequest(username, password);
    };

    return (
        <div className="login">
            <div className="login__form">
                <h2>Login</h2>
                <div>
                    Don't have an account yet ? <a href="/signup">Sign up</a>
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

const mapDispatchToProps = () => {
    return {
        userLoginRequest
    }
}

const Login = connect(null, mapDispatchToProps)(Component)

export { Login };