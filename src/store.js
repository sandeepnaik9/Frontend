import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reduxFeatures/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})
