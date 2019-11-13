import * as React from 'react';
import "./styles.scss";
import { connect } from 'react-redux';

import useForm from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';


export interface SignUpProps {
    
}

interface SignUp {
    name:       string,
    email:      string,
    country:    string,
    username:   string,
    password:   string
}

const SignUp: React.FC<SignUpProps> = props => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (values: SignUp) => {
        
    };

    return (
        <div className="signup">
            <div className="signup__form">
                <h2>Sign Up</h2>
                <div>
                    Already have an account ? <a href="/login">Log In</a>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Field>
                        <label>Name</label>
                        <input 
                            name="name" 
                            placeholder="Name" 
                            ref={register({ required: true })} />
                            {errors.name && 'Name is required.'}
                    </Form.Field>

                    <Form.Field>
                        <label>Email</label>
                        <input 
                            name="email" 
                            placeholder="Email" 
                            ref={register({ required: true })} />
                            {errors.email && 'Email is required.'}
                    </Form.Field>
                    
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
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;