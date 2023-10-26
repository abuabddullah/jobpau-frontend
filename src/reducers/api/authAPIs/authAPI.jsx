import { fetchUserDetailsAction } from "../../authReducers/authActions";
import applicationAPI from "../applicationAPI";

const authAPI = applicationAPI.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["users"],
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data);
          dispatch(fetchUserDetailsAction(userData.email));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = authAPI;
