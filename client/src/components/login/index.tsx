import * as React from 'react';
import "./styles.scss";

import useForm from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';

const Login: React.FC<{}> = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log("values: ", values);
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

export { Login };