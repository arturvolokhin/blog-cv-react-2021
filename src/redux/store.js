import { configureStore } from "@reduxjs/toolkit";
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from './reducers';

const persistConfig = {
    key: "root",
    storage,
    // stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PURGE,
                    PAUSE,
                    PERSIST,
                    REGISTER,
                ],
            },
        }),
});

export let persistor = persistStore(store);

// persistor.purge();

