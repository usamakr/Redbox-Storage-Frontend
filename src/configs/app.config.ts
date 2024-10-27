export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    orderPortalEntryPath: string
    adminDashboardEntryPath: string
    externalAppEntryPath: string
    publicToken: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: 'http://localhost:3001/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    orderPortalEntryPath: '/order-portal',
    adminDashboardEntryPath: '/admin',
    externalAppEntryPath: '/app',
    publicToken: '1234',
    tourPath: '/',
    locale: 'en',
    enableMock: false,
}

export default appConfig
