export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    orderPortalEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: 'http://localhost:3001/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    orderPortalEntryPath: '/order-portal',

    tourPath: '/',
    locale: 'en',
    enableMock: true,
}

export default appConfig
