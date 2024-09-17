import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type SignInUpState = {
    mode: 'signin' | 'signup'
}

const initialState: SignInUpState = {
    mode: 'signin',
}

const signInUpSlice = createSlice({
    name: `${SLICE_BASE_NAME}/authenticationMode`,
    initialState,
    reducers: {
        setMode(state, action: PayloadAction<'signin' | 'signup'>) {
            state.mode = action.payload
        },
    },
})

export const { setMode } = signInUpSlice.actions
export default signInUpSlice.reducer
