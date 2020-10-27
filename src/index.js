import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-calendar/dist/Calendar.css";
import "./app/layouts/styles.css";
import App from "./app/layouts/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/layouts/ScrollToTop";

const store = ConfigureStore();

// For Hot Module which adds the change without refreshing or flickering of the page and we use it only in development
const rootEl = document.getElementById("root");
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};
if (module.hot) {
  // module is from webpack and it is available after compilation
  module.hot.accept("./app/layouts/App", () => {
    setTimeout(render);
  });
}
render();

// ReactDOM.render(<App />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
