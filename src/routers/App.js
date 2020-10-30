import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AdminLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth";
import CommonRouter from "../layouts/common";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} ></Route>
                <Route path="/auth" render={props => <AuthLayout {...props} />}></Route>
                <Route path="/" render={props => <CommonRouter {...props} />}></Route>
                <Redirect from="/" to="/auth/login" /> 
            </Switch>
        )
    }
}
export default App;