import {combineReducers, configureStore } from "@reduxjs/toolkit";
// import loginSlice from "./LoginSlice/slice"
import kittiesSlice from "./KittiesSlice/kitties.slice"
import gameTypeSlice from "./GameTypeSlice/gametype.slice"
import gameLogSlice from "./GameLogSlice/gamelog.slice"



const rootReducer = combineReducers(
    {
        // toolkit: slice
        // mainStore: loginSlice,
        kittiesStore: kittiesSlice,
        gameTypeStore: gameTypeSlice,
        gameLogStore: gameLogSlice
    }
)

export const store = configureStore({
    reducer: rootReducer,
})
