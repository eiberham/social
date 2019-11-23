import * as React from 'react';
import "./styles.scss";
import { connect } from 'react-redux';

import useForm from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

export interface SignUpProps {
    authenticated: boolean
}

interface ISignUp {
    name:       string,
    email:      string,
    country:    string,
    username:   string,
    password:   string
}

const Component: React.FC<SignUpProps> = props => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (values: ISignUp) => {
        
    };

    const { authenticated } = props;

    console.log("authenticated: ", authenticated);
    if( authenticated ) return <Redirect to="/login" />

    return (
        <div className="signup">
            <div className="signup__form">
                <h2>Sign Up</h2>
                <div>
                    Already have an account ? <Link to="/login">Log In</Link>
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

const mapStateToProps = ({ auth }) => {
    return {
        authenticated: auth.authenticated
    }
}

const SignUp = connect(mapStateToProps, null)(Component);

export { SignUp };