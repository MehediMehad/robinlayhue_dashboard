import { TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";
import { TService } from "@/components/Dashboard/AllServiceName/ServiceName/ServiceNameCard";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
        query: (data) => ({
          url: "/service/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["SERVICE"],
      }),
    getAllService: builder.query({
      query: () => ({
        url: `/service`,
        method: "GET",
      }),
      providesTags: ["SERVICE"],
      transformResponse: (response: TResponseRedux<TService[]>) => {
        return {
          data: response.data,
        };
      },
    }),

  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
} = serviceApi;
