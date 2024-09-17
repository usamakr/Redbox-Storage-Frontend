import { Button } from '@/components/ui'
import React from 'react'

function AuthButtons() {
    return (
        <div className="col-start-9 gap-2 col-span-2 grid grid-cols-2 items-center justify-center ">
            <Button variant="default" size="sm" style={{ padding: '0.1rem' }}>
                Login
            </Button>
            <Button variant="solid" size="sm" style={{ padding: '0.1rem' }}>
                Sign Up
            </Button>
        </div>
    )
}

export default AuthButtons
