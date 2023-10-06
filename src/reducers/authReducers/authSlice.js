import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setStateUser, resetStateUser } = authSlice.actions;

export default authSlice.reducer;
