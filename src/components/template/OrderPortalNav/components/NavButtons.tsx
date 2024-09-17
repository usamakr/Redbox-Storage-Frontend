import React from 'react'
import Button from './Button'

function NavButtons() {
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
