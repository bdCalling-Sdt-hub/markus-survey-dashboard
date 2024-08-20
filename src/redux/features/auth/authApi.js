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
    }),
})

export const { useLogInCompanyMutation } = authApi;