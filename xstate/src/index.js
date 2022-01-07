import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MattsMachineControl from "./MattsMachineControl";
import reportWebVitals from "./reportWebVitals";
import Resolver from "./Resolver";
import { MattsMachineGlobalStateProvider } from "./MattsMachineGlobalState";

ReactDOM.render(
  <React.StrictMode>
    <MattsMachineGlobalStateProvider>
      <MattsMachineControl />
      <Resolver />
      <App />
    </MattsMachineGlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
