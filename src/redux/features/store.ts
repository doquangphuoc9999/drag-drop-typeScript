import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./appStateSlice";

export const store = configureStore({
    reducer: {
        appSate: appStateSlice
    }
})

export type RootState = ReturnType<typeof store.getState>