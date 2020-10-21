import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layouts/App";
import * as serviceWorker from "./serviceWorker";

// For Hot Module which adds the change without refreshing or flickering of the page and we use it only in development
const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );
};

if (module.hot) {  // module is from webpack
  module.hot.accept("./app/layouts/App", () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
