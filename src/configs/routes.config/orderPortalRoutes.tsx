import { Routes } from '@/@types/routes'
import { lazy } from 'react'

export const customerProtectedRoutes: Routes = [
    {
        key: 'orderportal',
        path: `order-portal`,
        component: lazy(() => import('@/views/auth/OrderPortal')),
        authority: ['customer'],
    },
]
