import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/booking",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["BOOKING"],
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
  useGetAllBookingQuery
} = bookingApi;
