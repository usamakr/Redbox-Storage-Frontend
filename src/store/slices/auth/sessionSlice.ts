import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { FE_DEFAULT_TOKEN } from '@/constants/app.constant'

export interface SessionState {
    signedIn: boolean
    token: string
}

const initialState: SessionState = {
    signedIn: false,
    token: '1234',
}

const sessionSlice = createSlice({
    name: `${SLICE_BASE_NAME}/session`,
    initialState,
    reducers: {
        signInSuccess(state, action: PayloadAction<string>) {
            state.signedIn = true
            state.token = action.payload
        },
        signOutSuccess(state) {
            state.signedIn = false
            state.token = ''
        },
    },
})

export const { signInSuccess, signOutSuccess } = sessionSlice.actions
export default sessionSlice.reducer
