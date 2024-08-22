import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        logInCompany: builder.mutation({
            query: (logInData) => {
                return {
                    url: `login`,
                    method: "POST",
                    body: logInData
                }
            }
        }),
        // getProfile: builder.query({
        //     query: () => {
        //         return {
        //             url: `profile`,
        //             method: "GET",
        //             headers: {
        //                 authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        //             }
        //         }
        //     }
        // }),

    }),
})

export const { useLogInCompanyMutation, useGetProfileQuery } = authApi;