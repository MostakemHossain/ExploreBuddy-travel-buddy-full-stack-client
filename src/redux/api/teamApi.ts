import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const teamAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createATeam: build.mutation({
      query: (data) => ({
        url: `/team/create-a-team-member`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.team],
    }),
    getAllTeamMembers: build.query({
      query: () => ({
        url: `/team`,
        method: "GET",
      }),
      providesTags: [tagTypes.team],
    }),
    deleteAEmployee: build.mutation({
      query: (id) => {
        return {
          url: `/team/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.team],
    }),
  }),
});

export const {
  useCreateATeamMutation,
  useGetAllTeamMembersQuery,
  useDeleteAEmployeeMutation,
} = teamAPI;
