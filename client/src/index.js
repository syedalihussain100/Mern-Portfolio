import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { hydrate, render } from "react-dom";

const options = {
  positions: positions.BOTTOM_CENTER,
  timeout: 5000,
  transitions: transitions.SCALE,
};

const Apps = (
  <React.StrictMode>
    <Provider store={Store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Apps, rootElement);
} else {
  render(Apps, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={Store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//       </AlertProvider>
//     </Provider>
//   </React.StrictMode>
// );
