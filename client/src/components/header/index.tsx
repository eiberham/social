import * as React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Link } from 'react-router-dom';

import { userLogoutRequest } from '../../actions/auth';

export interface HeaderProps {
    authenticated?: boolean,
    userLogoutRequest?: () => void
};

export const Component: React.FC<HeaderProps> = props => {
    const { authenticated } = props;

    const logOut = () => {
        props.userLogoutRequest();
    }

    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <span>Social.</span>
                </a>
            </div>
            <div className="accounts">
                <ul>
                    <li>
                        {authenticated ? (
                            <a onClick={logOut}>Sign out</a>
                        ) : (
                            <React.Fragment>
                                <Link to="/login">Sign in</Link>
                                <Link to="/signup">Sign up</Link>
                            </React.Fragment>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        userLogoutRequest
    }, dispatch)
}

const Header = connect(
    mapStateToProps, 
    mapDispatchToProps)(Component);

export { Header };