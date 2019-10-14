import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import store from "./redux/store";

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));