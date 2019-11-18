import * as React from 'react';
import './styles.scss';

import { Link } from 'react-router-dom';

export const Header: React.FC<{}> = () => {
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
                        <Link to="/login">Sign in</Link>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};