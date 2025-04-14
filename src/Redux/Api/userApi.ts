import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";
import { TUser } from "@/types";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data: any) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["USERS"],
    }),
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/users/all",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["USERS"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data.data,
          meta: response.data.meta,
        };
      },
    }),
    getSingleUsers: builder.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["USERS"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
        };
      },
    }),
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
    // TODO: DELETE
    getAll: builder.query({
      query: () => ({
        url: "/users/all",
        method: "GET",
      }),
    }),

    allCreators: builder.query({
      query: ({ page, limit, email }) => ({
        url: `/user/creator-user-all?page=${page}&limit=${limit}&email=${email}`,
        method: "GET",
      }),
    }),
    userStatusUpdate: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: `/users/update-status/${data?.id}`,
          method: "PATCH",
          body: { status: data?.status },
        };
      },
      invalidatesTags: ["USERS"],}),
  }),
});

export const {
  useLoginUserMutation,
  useAllCreatorsQuery,
  useUserStatusUpdateMutation,
  useGetMeQuery,
  useGetAllQuery,
  useGetAllUsersQuery,
  useGetSingleUsersQuery,
} = userApi;
