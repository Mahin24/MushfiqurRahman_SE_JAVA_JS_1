import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routers/PrivateRoute";

import Siddebar from "../components/common/Sidebar";
import AdminNavbar from "../components/common/Navbar";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return(<Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />)
          } else {
            return null;
          }
        });
    };

    render() {
        return (
            <div id="dashboard">
                <AdminNavbar></AdminNavbar>
                <Siddebar></Siddebar>
                <Switch>{this.getRoutes(routes)}</Switch>
            </div>
        )
    }
}

export default Admin;