import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data: any) => {
        return {
          url: "/auth/register-admin",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["ADMIN"],
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
  useCreateAdminMutation,
  useGetAllAdminsQuery,
  useGetUniqueUsernameMutation,
} = adminApi;
