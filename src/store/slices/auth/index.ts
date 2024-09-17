import { combineReducers } from '@reduxjs/toolkit'
import session, { SessionState } from './sessionSlice'
import user, { UserState } from './userSlice'
import authMode, { SignInUpState } from './authMode'

const reducer = combineReducers({
    session,
    user,
    authMode,
})

export type AuthState = {
    session: SessionState
    user: UserState
    authMode: SignInUpState
}

export * from './sessionSlice'
export * from './userSlice'

export default reducer
