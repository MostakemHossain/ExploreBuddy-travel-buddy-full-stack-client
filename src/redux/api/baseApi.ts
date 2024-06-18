import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://tour-explore-buddy.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
