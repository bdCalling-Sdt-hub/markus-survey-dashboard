import { baseApi } from "../../api/baseApi";


export const surveyAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createQuestions: builder.mutation({
            query: (questinsData) => {
                return {
                    url: `questions`,
                    method: "POST",
                    body: questinsData,
                }
            }
        }),
        getProjectForManageCompany: builder.query({
            query: ({page}) => {
                return {
                    url: `projects?page=${page}`,
                    method: "GET",
                }
            }
        }),
        getSurveyForManageCompany: builder.query({
            query: ({page}) => {
                return {
                    url: `surveys?page=${page}`,
                    method: "GET",
                }
            }
        }),
    }),
})

export const { useCreateQuestionsMutation, useGetProjectForManageCompanyQuery, useGetSurveyForManageCompanyQuery } = surveyAPi;