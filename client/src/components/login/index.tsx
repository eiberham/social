import * as React from 'react';
import "./styles.scss";

import useForm from 'react-hook-form';
import { Form, Input, Button } from 'semantic-ui-react';

export const Login: React.FC<{}> = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log("values: ", values);
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' ref={register} />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' ref={register} />
                </Form.Field>

                <Button type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}