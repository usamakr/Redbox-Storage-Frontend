export type SignInCredential = {
    email: string
    password: string
    rememberMe: boolean
}

export type SignInResponse = {
    token: string
    user: {
        userName: string
        authority: string[]
        avatar: string
        email: string
    }
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    phone: string
    marketingConsent: boolean
}

export type ForgotPassword = {
    email: string
}

export type ResetPassword = {
    password: string
}
