import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

// anecdoteService.getAll().then((a) => store.dispatch(initializeAnecdotes(a)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
