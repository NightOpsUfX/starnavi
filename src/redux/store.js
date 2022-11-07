import {combineReducers, configureStore } from "@reduxjs/toolkit";
import gameTypeSlice from "./GameTypeSlice/gametype.slice"
import gameLogSlice from "./GameLogSlice/gamelog.slice"

const rootReducer = combineReducers(
    {
        gameTypeStore: gameTypeSlice,
        gameLogStore: gameLogSlice
    }
)

export const store = configureStore({
    reducer: rootReducer,
})
