import {createSlice} from "@reduxjs/toolkit";

const kittiesSlice = createSlice({
    name: "kittiesListArray",
    initialState: {
        kittiesList: '',
        kittiesPaginationInfo: '',
        kittiesListNextPage: ''
    },
    reducers: {
        setKittiesList(state, action) {
            state.kittiesList = !state.kittiesList ? action.payload.cats : [...state.kittiesList, ...action.payload.cats]
            state.kittiesPaginationInfo= action.payload.pagination_info
        },
        setKittiesListWithNewParam(state, action) {
            state.kittiesList = action.payload.cats
            state.kittiesPaginationInfo = action.payload.pagination_info
        },
        setKittiesListClear(state) {
            state.kittiesList = ''
            state.kittiesPaginationInfo = ''
        },
        setKittiesListNextPage(state, action) {
            state.kittiesListNextPage = action.payload
        },
    }
})

export default kittiesSlice.reducer
export const {setKittiesList, setKittiesListWithNewParam, setKittiesListClear} = kittiesSlice.actions
