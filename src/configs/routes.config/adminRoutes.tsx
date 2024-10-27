import { Routes } from '@/@types/routes'
import { lazy } from 'react'

export const adminProtectedRoutes = [
    {
        key: 'adminDashboard',
        path: 'admin',
        component: lazy(() => import('@/views/admin/dash')),
        authority: ['admin'],
    },
]
