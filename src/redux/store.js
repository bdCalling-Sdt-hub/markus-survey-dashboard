// store.js
import { configureStore } from '@reduxjs/toolkit';
// import { translateApi } from './translateApi';
// import {translateApi} from './api/translateApi'
import baseApi from './api/baseapi';


export const store = configureStore({
  reducer: {
    // [translateApi.reducerPath]: translateApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  // concat(translateApi.middleware),

});
