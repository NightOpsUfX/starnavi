import {createSlice} from "@reduxjs/toolkit";

const gameLogSlice = createSlice({
    name: "gameLog",
    initialState: {
        gameLog: '',
    },
    reducers: {
        setGameLog(state, action) {
            state.gameLog = action.payload
        },
    }
})

export default gameLogSlice.reducer
export const {setGameLog} = gameLogSlice.actions
