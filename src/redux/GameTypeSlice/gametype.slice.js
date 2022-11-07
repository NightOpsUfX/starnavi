import {createSlice} from "@reduxjs/toolkit";

const gameTypeSlice = createSlice({
    name: "gameTypeArray",
    initialState: {
        gameTypeList: '',
        selectedGameType: 5,
    },
    reducers: {
        setGameTypesFromApi(state, action) {
            state.gameTypeList = action.payload
        },
        setSelectedGameType(state, action) {
            state.selectedGameType = action.payload
        }
    }
})

export default gameTypeSlice.reducer
export const {setGameTypesFromApi, setSelectedGameType} = gameTypeSlice.actions
