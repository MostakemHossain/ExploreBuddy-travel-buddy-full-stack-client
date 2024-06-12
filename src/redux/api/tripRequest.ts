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
  }),
});

export const { useGetTripRequestQuery } = tripRequestApi;
