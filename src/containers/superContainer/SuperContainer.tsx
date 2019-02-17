import store, { history } from "@ducks/root";
import { ConnectedRouter } from "connected-react-router";
import React, { Component } from "react";
import { Provider } from "react-redux";
import RouteCollection from "../../routes/routeCollection";
import "./style.css";

class SuperContainer extends Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <RouteCollection />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default SuperContainer;
