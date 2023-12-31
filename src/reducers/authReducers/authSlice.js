import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetailsAction } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    stateUser: { email: "", role: "" },
    isLoading: false,
    error: null,
  },
  reducers: {
    setStateUser: (state, action) => {
      state.stateUser = action.payload;
    },
    resetStateUser: (state) => {
      state.stateUser = { email: "", role: "" };
    },
    cleareStateUserErr: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [fetchUserDetailsAction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUserDetailsAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.stateUser = action.payload;
    },
    [fetchUserDetailsAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setStateUser, resetStateUser } = authSlice.actions;

export default authSlice.reducer;
