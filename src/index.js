import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
//import App from "./App";
import Login from "./App2";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Login />
  </StrictMode>,
  rootElement
);
