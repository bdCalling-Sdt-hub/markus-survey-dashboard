import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from './features/auth/authSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice,
        [baseApi.reducerPath]: baseApi.reducer,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)