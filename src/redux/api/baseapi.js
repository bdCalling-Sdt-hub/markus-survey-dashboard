import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://115.127.156.13:7000/api",
  }),
  endpoints: (builder) => ({
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

export const { useSetForgetPassMutation, useSetvarificationCodeMutation,useSetResendCodeMutation,useSetResetPassMutation } =
  baseApi;
export default baseApi;
