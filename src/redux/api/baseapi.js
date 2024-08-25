import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://115.127.156.13:7000/api",
  }),
  endpoints: (builder) => ({
    //Survery Query:

    getSurveyQN: builder.query({
      query: () =>
        "/single-surveys-questions/7e8f18c7-540e-4faa-b818-f08c3335e586",
    }),
    getAllQnAns: builder.query({
      query: () => "/anonymous-survey-report?survey_id=17",
    }),
    // Super Admin Dashboard Query:
    getCompany: builder.query({
      query: () => "/companies",
    }),
    // Survey Mutation:
    postSurveyQn: builder.mutation({
      query: (data) => ({
        url: '/anonymous-surveys',
        method: 'POST',
        body: data,
      }),
    }),

    
    // Auth Mutation:
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    setForgetPass: builder.mutation({
      query: (values) => ({
        url: "/forget-pass",
        method: "POST",
        body: values,
      }),
    }),
    setvarificationCode: builder.mutation({
      query: (otp) => ({
        url: "/email-verified",
        method: "POST",
        body: otp,
      }),
    }),
    setResendCode: builder.mutation({
      query: (resendOtp) => ({
        url: "/resend-otp",
        method: "POST",
        body: resendOtp,
      }),
    }),
    setResetPass: builder.mutation({
      query: (values) => ({
        url: "/reset-pass",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const {
  useGetSurveyQNQuery,
  useGetAllQnAnsQuery,
  useGetCompanyQuery,
  usePostSurveyQnMutation,
  useLoginUserMutation,
  useSetForgetPassMutation,
  useSetvarificationCodeMutation,
  useSetResendCodeMutation,
  useSetResetPassMutation,
} = baseApi;
export default baseApi;
