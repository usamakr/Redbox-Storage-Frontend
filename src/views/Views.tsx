import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { adminRoutes, publicRoutes } from '@/configs/routes.config'
import appConfig from '@/configs/app.config'
import PageContainer from '@/components/template/PageContainer'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import ProtectedRoute from '@/components/route/ProtectedRoute'
import PublicRoute from '@/components/route/PublicRoute'
import AuthorityGuard from '@/components/route/AuthorityGuard'
import AppRoute from '@/components/route/AppRoute'
import type { LayoutType } from '@/@types/theme'
import BoxLoading from '@/components/shared/loaders/BoxLoading'

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const {
    authenticatedEntryPath,
    orderPortalEntryPath,
    adminDashboardEntryPath,
    externalAppEntryPath,
} = appConfig

const AllRoutes = (props: AllRoutesProps) => {
    const userAuthority = useAppSelector((state) => state.auth.user.roles)

    return (
        <Routes>
            <Route path="/hq" element={<ProtectedRoute />}>
                {/* <Route
                    path="admin"
                    element={<Navigate replace to={adminDashboardEntryPath} />}
                /> */}
                {adminRoutes.map((route, index) => (
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>
            <Route path="/" element={<PublicRoute />}>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>
            <Route
                path="*"
                element={<Navigate replace to="/access-denied" />}
            />
        </Routes>
    )
}

const Views = (props: ViewsProps) => {
    return (
        <Suspense fallback={<Loading loading={true} />}>
            <AllRoutes {...props} />
        </Suspense>
    )
}

export default Views
