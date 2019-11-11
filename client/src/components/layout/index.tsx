import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import "./styles.scss";

import { Header } from '../header';
import { Footer } from '../footer';

import { Login } from '../login';

export const Layout: React.FC<{}> = () => {
    const history = createBrowserHistory();
    return (
        <div className="content">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
};