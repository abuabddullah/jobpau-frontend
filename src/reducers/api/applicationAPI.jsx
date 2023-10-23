import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const applicationAPI = createApi({
  reducerPath: "applicationAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({}),
});

export default applicationAPI;
