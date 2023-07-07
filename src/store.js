import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reduxFeatures/auth/authSlice'
import eventReducer from './reduxFeatures/event/eventSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        event: eventReducer
    },
})
