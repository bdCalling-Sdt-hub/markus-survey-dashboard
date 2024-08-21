import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from './features/auth/authSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// const storageWithLimit = {
//     ...storage,
//     setItem: (key, value) => {
//       // Limit the size of stored data
//       if (value.length > 1000000) { // Example limit of 1MB
//         throw new Error('Storage limit exceeded');
//       }
//       return storage.setItem(key, value);
//     }
//   };
  

const persistConfig = {
    key: 'markus-survey',
    storage,
    blacklist: ['baseApi']
}

const rootReducer = combineReducers({ 
    auth: authSlice,
    [baseApi.reducerPath]: baseApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
})

export const persistor = persistStore(store)
setupListeners(store.dispatch)
