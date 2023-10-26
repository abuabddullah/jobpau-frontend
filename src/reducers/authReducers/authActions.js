import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetailsAction = createAsyncThunk(
  "posts/fetchUserDetailsAction",
  async (email) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/user/?email=${email}`
    );
    return data.userDetails; // need to handle error if user email is not found in db
  }
);
