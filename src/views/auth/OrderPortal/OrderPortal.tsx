// Libs
import { useState } from 'react'

// Components
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import { useAppSelector } from '@/store'

const OrderPortal = () => {
    const { authMode } = useAppSelector((state) => state.auth)
    return authMode.mode === 'signin' ? <SignIn /> : <SignUp />
}

export default OrderPortal
