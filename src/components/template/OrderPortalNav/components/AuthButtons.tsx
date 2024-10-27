// 3rd party
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Custom imports
import { Button } from '@/components/ui'
import { useAppDispatch } from '@/store'
import { setMode } from '@/store/slices/auth/authMode'

function AuthButtons() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const gotoLoginPage = () => {
        dispatch(setMode('signin'))
    }
    const gotoSignupPage = () => {
        dispatch(setMode('signup'))
    }

    return (
        <div className="col-start-9 gap-2 col-span-2 grid grid-cols-2 items-center justify-center ">
            <Button
                variant="default"
                size="sm"
                style={{ padding: '0.1rem' }}
                onClick={gotoLoginPage}
            >
                Login
            </Button>
            <Button
                variant="solid"
                size="sm"
                style={{ padding: '0.1rem' }}
                onClick={gotoSignupPage}
            >
                Sign Up
            </Button>
        </div>
    )
}

export default AuthButtons
