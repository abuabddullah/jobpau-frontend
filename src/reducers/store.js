import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducers/authSlice";
import applicationAPI from "./api/applicationAPI";
const store = configureStore({
  reducer: {
    authUser: authReducer,
    [applicationAPI.reducerPath]: applicationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationAPI.middleware),
});

export default store;
