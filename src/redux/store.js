import {combineReducers, configureStore } from "@reduxjs/toolkit";
// import loginSlice from "./LoginSlice/slice"
import kittiesSlice from "./KittiesSlice/kitties.slice"



const rootReducer = combineReducers(
    {
        // toolkit: slice
        // mainStore: loginSlice,
        kittiesStore: kittiesSlice,
    }
)

export const store = configureStore({
    reducer: rootReducer,
})
