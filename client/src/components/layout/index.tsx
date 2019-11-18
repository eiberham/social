import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import "./styles.scss";

import { Header } from '../header';
import { Footer } from '../footer';

import { Login } from '../login';
import { SignUp } from '../signup';

export const Layout: React.FC<{}> = () => {
    const history = createBrowserHistory();
    return (
        <div className="content">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
};