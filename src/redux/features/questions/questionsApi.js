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
        })
    }),
})

export const { useCreateQuestionsMutation } = surveyAPi;