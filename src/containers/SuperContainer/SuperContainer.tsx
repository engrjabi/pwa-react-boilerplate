import store from "@ducks/root";
import React, { Component } from "react";
import { Provider } from "react-redux";
import Counter from "../Counter/Counter";
import ReactWaterMark from "../ReactWaterMark/ReactWaterMark";
import "./style.css";

class SuperContainer extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <ReactWaterMark />
        </div>
      </Provider>
    );
  }
}

export default SuperContainer;
