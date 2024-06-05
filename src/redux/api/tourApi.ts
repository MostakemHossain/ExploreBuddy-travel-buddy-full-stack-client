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
    }),
  }),
});

export const { useCreateTourMutation } = tourApi;
