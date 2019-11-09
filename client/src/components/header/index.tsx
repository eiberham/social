import * as React from 'react';
import './styles.scss';

export const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <span>Social</span>
                </a>
            </div>
            <div className="accounts">
                <ul>
                    <li>
                        <a href="#">Sign in</a>
                        <a href="#">Sign up</a>
                    </li>
                </ul>
            </div>
        </header>
    )
};