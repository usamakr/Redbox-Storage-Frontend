import React from 'react'
import Button from './Button'
import useRole from '@/utils/hooks/useRole'
import useAuthority from '@/utils/hooks/useAuthority'

function NavButtons() {
    const currentRole = useRole()

    return (
        <div className="col-span-6 grid grid-cols-4 items-center  ">
            <Button>Home</Button>
            <Button>Orders</Button>
            <Button>Contact</Button>
            <Button>About</Button>
        </div>
    )
}

export default NavButtons
