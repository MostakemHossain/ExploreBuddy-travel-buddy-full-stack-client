import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const tripRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTripRequest: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/trip/travel-buddies/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tripRequest],
    }),
    getALLTripRequest: build.query({
      query: () => ({
        url: `/trip/travel-request`,
        method: "GET",
      }),
      providesTags: [tagTypes.tripRequest],
    }),
    updateSpecificTripRequest: build.mutation({
      query: ({ id, newStatus }) => ({
        url: `/trip/travel-buddies/${id}/respond`,
        method: "PATCH",
        data: { newStatus },
      }),
    }),
  }),
});

export const {
  useGetTripRequestQuery,
  useGetALLTripRequestQuery,
  useUpdateSpecificTripRequestMutation,
} = tripRequestApi;
