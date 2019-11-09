import * as React from 'react';
import "./App.scss";

import { Header } from './header';
import { Footer } from './footer';

export default class App extends React.Component<{}> {
    render(){
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
};