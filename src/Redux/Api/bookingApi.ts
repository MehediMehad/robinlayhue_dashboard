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
        console.log("API Response:", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAssign: builder.mutation({
      query: (data) => ({
        url: "/booking/assign",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["BOOKING"]
    }),
  
  }),
});

export const {
  useGetAllBookingQuery,
  useAddAssignMutation
} = bookingApi;
