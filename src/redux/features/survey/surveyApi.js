import { baseApi } from "../../api/baseApi";


export const surveyAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSurvey: builder.mutation({
            query: (surveyData) => {
                return {
                    url: `surveys`,
                    method: "POST",
                    body: surveyData,
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        deleteSurvey: builder.mutation({
            query: (id) => {
                return {
                    url: `surveys/${id}`,
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        getSurvey: builder.query({
            query: () => {
                return {
                    url: `surveys`,
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
    }),
})

export const { useCreateSurveyMutation, useGetSurveyQuery, useDeleteSurveyMutation  } = surveyAPi;