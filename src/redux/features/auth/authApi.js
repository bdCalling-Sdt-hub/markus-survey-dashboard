import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        logIn: builder.mutation({
            query: (logInData) => ({
                url: `/login`,
                method: "POST",
                body: logInData
            })
        }),
    }),
})

export const { useLogInMutation } = authApi;