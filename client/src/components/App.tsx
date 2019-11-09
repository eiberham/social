import * as React from 'react';
import "./App.scss";

import { Layout } from './layout';

export default class App extends React.Component<{}> {
    render(){
        return (
            <React.Fragment>
                <Layout />
            </React.Fragment>
        )
    }
};