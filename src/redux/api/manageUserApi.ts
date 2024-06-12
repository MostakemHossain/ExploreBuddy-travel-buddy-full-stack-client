import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const myProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),

      providesTags: [tagTypes.manageUser],
    }),
  }),
});

export const { useGetAllUsersQuery } = myProfileApi;
