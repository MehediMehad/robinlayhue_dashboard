import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSellers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/sellers",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["SELLERS"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data.data,
          meta: response.data.meta,
        };
      },
    }),

  }),
});

export const {
  useGetAllSellersQuery,
} = sellerApi;