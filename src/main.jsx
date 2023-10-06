import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "../routes/routes";
import UserContextProvider from "./components/contexts/UserContextProvider/UserContextProvider";
import "./index.css";
import store from "./reducers/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <RouterProvider router={routes} />
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
);
