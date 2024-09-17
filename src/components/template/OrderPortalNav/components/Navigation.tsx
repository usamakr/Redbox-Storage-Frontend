import React from 'react'

// Components
import AuthButtons from './AuthButtons'
import BurgerNav from './BurgerNav'
import NavButtons from './NavButtons'

function Navigation() {
    return (
        <>
            <div className="lg:grid grid-cols-10 h-full  col-span-12 hidden  ">
                <NavButtons />
                <AuthButtons />
            </div>
            <div className=" lg:hidden col-span-1 col-start-12 ">
                <BurgerNav />
            </div>
        </>
    )
}

export default Navigation
