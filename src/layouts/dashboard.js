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
              exact
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />)
          } else {
            return null;
          }
        });
    };

    checkUserLogin = () => {
      let myProfile =localStorage.getItem("myProfile");

      if (!myProfile) {
        window.location = "/auth/login"
      }
    }

    render() {
      this.checkUserLogin();

      return (
        <>
          <div id="wrapper">
            <Siddebar></Siddebar>
            <div id="content-wrapper" classNameName="d-flex flex-column">
              <div id="content">
                <AdminNavbar></AdminNavbar>
                <div className="container-fluid">
                      <Switch>{this.getRoutes(routes)}</Switch>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default Admin;