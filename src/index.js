import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "@ant-design/cssinjs";
import store from "./app/store";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
