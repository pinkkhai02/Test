import React from "react";
import App from "./App";
import store from "./redux/store";
import global from "./components/global/Global.scss";
import "@fontsource/roboto/500.css";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);
