import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const actApi = createApi({
  reducerPath: "actApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://biztekminds.com/" }),
  endpoints: (builder) => ({

    // -------- Activities-----------

    getEvents: builder.query({
      query: () => `/mycoolapp/events`, 
      catch (error) {
        return (error.message);
      }
    }),
  }),
});

export const {
  useGetEventsQuery,
} = actApi;
