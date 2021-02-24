import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Imports from react router dom
import { BrowserRouter as Router } from "react-router-dom";

// Imports of ContextAPI Providers
import { DarkModeProvider } from "./darkmode/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
