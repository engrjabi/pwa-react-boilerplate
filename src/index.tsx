import React from "react";
import ReactDOM from "react-dom";
import SuperContainer from "./containers/SuperContainer/SuperContainer";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<SuperContainer />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
