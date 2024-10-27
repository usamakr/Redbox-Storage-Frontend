import { Routes } from '@/@types/routes'
import { lazy } from 'react'

export const externalAppProtectedRoutes = [
    {
        key: 'logisticsDashboard',
        path: 'app',
        component: lazy(() => import('@/views/service_app/main')),
        authority: ['logistics'],
    },
]
