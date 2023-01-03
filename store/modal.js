import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    statusModalWithoutPortal: false,
    statusModalWithPortal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setStatusModalWithPortal(state, active) {
            state.statusModalWithPortal = active.payload
        },
        setStatusModalWithoutPortal(state, active) {
            state.statusModalWithoutPortal = active.payload
        }
    }
})

export const { setStatusModalWithPortal, setStatusModalWithoutPortal } = modalSlice.actions
export default modalSlice.reducer
