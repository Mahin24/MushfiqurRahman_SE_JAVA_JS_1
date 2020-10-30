import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routers/PublicRoute";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/auth") {
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

      if (myProfile) {
        window.location = "/admin/"
      }
    }

    render() {
      this.checkUserLogin()
      return (
          <div>
              <Switch>{this.getRoutes(routes)}</Switch>
          </div>
      )
    }
}

export default Auth;