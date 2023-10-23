import applicationAPI from "../applicationAPI";

const authAPI = applicationAPI.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useRegisterMutation } = authAPI;
