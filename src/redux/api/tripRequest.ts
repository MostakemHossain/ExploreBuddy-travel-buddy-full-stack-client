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
    getALLApprovalTripRequest: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/trips/all-trips`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.tripRequest],
    }),
    updateSpecificTripRequest: build.mutation({
      query: (id) => ({
        url: `/trip/${id}/request`,
        method: "POST",
      }),
    invalidatesTags: [tagTypes.myTrips],
    }),
  }),
});

export const {
  useGetTripRequestQuery,
  useGetALLTripRequestQuery,
  useUpdateSpecificTripRequestMutation,
  useGetALLApprovalTripRequestQuery,
} = tripRequestApi;
