import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../routers/CommonRoute";

class Common extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRoutes = routes => {
      return routes.map((prop, key) => {  
        if (prop.layout === "/") {
          return(<Route
            exact
            path={prop.path}
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
            <div>
                <Switch>
                  {this.getRoutes(routes)}
                </Switch>
            </div>
        )
    }
}

export default Common;