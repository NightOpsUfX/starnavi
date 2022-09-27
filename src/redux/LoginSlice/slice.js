import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "login",
    initialState: {
        login: ''
    },
    reducers: {
        setLoginToStore(state, action) {
            state.login = action.payload
        }
    }
})

export default slice.reducer
export const {setLoginToStore} = slice.actions
