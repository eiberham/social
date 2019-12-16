import * as React from 'react';
import { useState, useCallback } from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import useForm from 'react-hook-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

import { userSignUpRequest } from '../../actions/register';

export interface SignUpProps {
    error: string,
    authenticated: boolean,
    userSignUpRequest: (name: string, email: string, country: string, username: string, password: string, repeat: string, token: string) => void
}

const Component: React.FC<SignUpProps> = props => {
    const { register, handleSubmit, errors } = useForm();
    const [visible, setVisible] = useState(true);
    const [token, setToken] = useState(null);

    const countryOptions = [
        { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
        { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
        { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
      ];

    const onSubmit = ({name, email, country, username, password, repeat}, e) => {
        props.userSignUpRequest(name, email, country, username, password, repeat, token);
        e.target.reset();
    };

    const onDismiss = () => setVisible(false);

    const onVerify = token => {
        // TODO: save token in component state and pass it later along with form input values to action creator
        // before, create an endpoint in server that makes a requests to recaptcha verification endpoint
        setToken(token);
    }

    const { authenticated, error } = props;

    console.log("authenticated: ", authenticated);
    if( authenticated ) return <Redirect to="/login" />

    return (
        <div className="signup">
            <div className="signup__form">
                { visible ? <Message error
                    onDismiss={onDismiss}
                    header='Error'
                    content={`${error}`}
                /> : ''}

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
                        <label>Country</label>
                        <select 
                            name="country" 
                            placeholder="Country" 
                            ref={register({ required: false })} 
                        >
                            <option value="AR">Argentina</option>
                        </select>
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

                    <Form.Field>
                        <label>Repeat Password</label>
                        <input 
                            name="repeat" 
                            type="password" 
                            placeholder="Password" 
                            ref={register({ required: true })} />
                            {errors.repeat && 'Password is required.'}
                    </Form.Field>

                    <GoogleReCaptcha onVerify={onVerify} />

                    <Button type="submit" color="red" fluid>
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
        authenticated: auth.authenticated,
        error: auth.error
    }
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(Component);

export { SignUp };