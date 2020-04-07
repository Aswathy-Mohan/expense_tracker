import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import configureStore from "./configureStore";
import Login from "./components/login/login";
import Routes from "./routes/routes";

//const store = configureStore();

ReactDOM.render(
  //<Provider store={store}>
  <Routes />,
  //</Provider>,
  document.getElementById("root")
);
