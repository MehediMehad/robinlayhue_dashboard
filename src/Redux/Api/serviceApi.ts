import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService2: builder.mutation({
      query: (data: any) => {
        return {
          url: "/auth/register-admin",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["ADMIN"],
    }),
    createService: builder.mutation({
        query: (data) => ({
          url: "/service/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["SERVICE"],
      }),
    getUniqueUsername: builder.mutation({
      query: (data: any) => {
        return {
          url: "/auth/unique-username",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["ADMIN"],
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/users/all-admin",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["ADMIN"],
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
  useCreateServiceMutation,
  useGetAllAdminsQuery,
  useGetUniqueUsernameMutation,
} = serviceApi;
