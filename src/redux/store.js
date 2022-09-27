import {combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice/slice"



const rootReducer = combineReducers(
    {

        // toolkit: slice
        mainStore: loginSlice
    }
)

export const store = configureStore({
    reducer: rootReducer,
})
