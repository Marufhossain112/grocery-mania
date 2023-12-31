import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api/api';
import userReducer from './user/userslice';
import productReducer from './product/productSlice';
import productQueryReducer from './queries/querySlice';
// Persist configuration for the regular Redux store
const reduxPersistConfig = {
    key: 'root', // Change this key if needed
    storage,
};
// Create the persisted reducer for the regular Redux store
const persistedProductReducer = persistReducer(reduxPersistConfig, productReducer);
// const persistedPcBuilderReducer = persistReducer(reduxPersistConfig, pcBuilderReducer);
const persistedUserReducer = persistReducer(reduxPersistConfig, userReducer);
const store = configureStore({
    reducer: { persistedProductReducer, persistedUserReducer, productQueryReducer, [api.reducerPath]: api.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
// Persist the store
const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export { store, persistor };