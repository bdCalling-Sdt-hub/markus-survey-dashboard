import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://115.127.156.13:7000/api',
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem('accessToken'));
            // console.log(token)
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: () => ({}),
})
