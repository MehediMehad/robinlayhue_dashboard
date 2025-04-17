import baseApi from "./baseApi";

const workerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorker: builder.query({
      query: () => ({
        url: `/worker`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const { useGetAllWorkerQuery } = workerApi;
