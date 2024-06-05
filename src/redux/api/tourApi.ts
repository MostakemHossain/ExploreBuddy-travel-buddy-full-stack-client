import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTour: build.mutation({
      query: (data) => {
        return {
          url: "/trips",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data,
        };
      },
      invalidatesTags: [tagTypes.myTrips],
    }),
    getMyTrip: build.query({
      query: () => {
        return {
          url: "/trips/my-trips",
          method: "GET",
        };
      },
      providesTags: [tagTypes.myTrips],
    }),
  }),
});

export const { useCreateTourMutation, useGetMyTripQuery } = tourApi;
