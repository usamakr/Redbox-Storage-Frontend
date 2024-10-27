import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: `sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `sign-up`,
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },

    {
        key: 'forgotPassword',
        path: `forgot-password`,
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
    {
        key: 'accessDenied',
        path: `access-denied`,
        component: lazy(() => import('@/views/common/AccessDenied')),
        authority: [],
    },
]

export default authRoute
