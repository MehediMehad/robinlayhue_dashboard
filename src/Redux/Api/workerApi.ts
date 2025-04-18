import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";

const workerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMember: builder.mutation({
      query: (data) => ({
        url: "/worker/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["WORKER"],
    }),
    getAllWorker: builder.query({
      query: () => ({
        url: `/worker`,
        method: "GET",
      }),
      providesTags: ["WORKER"],
      transformResponse: (response: any) => {
        return {
          data: response.data,
        };
      },
    }),
    getAllWorkerMeta: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/worker",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["WORKER"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useCreateMemberMutation ,useGetAllWorkerQuery, useGetAllWorkerMetaQuery } = workerApi;
