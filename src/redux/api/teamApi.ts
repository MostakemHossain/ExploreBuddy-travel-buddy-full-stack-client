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
  }),
});

export const { useCreateATeamMutation } = teamAPI;
