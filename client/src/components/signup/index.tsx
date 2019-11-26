import * as React from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import useForm from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

import { userSignUpRequest } from '../../actions/register';

export interface SignUpProps {
    authenticated: boolean,
    userSignUpRequest: (name: string, email: string, country: string, username: string, password: string) => void
}

const Component: React.FC<SignUpProps> = props => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = ({name, email, country, username, password}) => {
        props.userSignUpRequest(name, email, country, username, password)
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        userSignUpRequest
    }, dispatch);
}

const mapStateToProps = ({ auth }) => {
    return {
        authenticated: auth.authenticated
    }
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(Component);

export { SignUp };