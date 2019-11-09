import * as React from 'react';
import "./styles.scss";

import { Header } from '../header';
import { Footer } from '../footer';

export const Layout: React.FC<{}> = () => {
    return (
        <div className="content">
            <Header />
            <Footer />
        </div>
    )
};