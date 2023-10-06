import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducers/authSlice";
const store = configureStore({
  reducer: {
    authUser: authReducer,
  },
});

export default store;
