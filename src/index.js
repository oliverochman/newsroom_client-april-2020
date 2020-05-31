import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import './i18n';

axios.defaults.baseURL = "http://localhost:3000/api";

ReactDOM.render(
  <BrowserRouter>
  <Suspense fallback={<div>Loading</div>} />
    <App/> 
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
