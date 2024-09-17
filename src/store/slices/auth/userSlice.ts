import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
    avatar?: string
    email?: string
    roles?: string[]
}

const initialState: UserState = {
    avatar: '',
    email: '',
    roles: [],
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.avatar = action.payload?.avatar
            state.email = action.payload?.email
            state.roles = action.payload?.roles
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
