import React from 'react'

// Components
import RedBox from './components/RedBox'
import classNames from 'classnames'
import Navigation from './components/Navigation'

function OrderPortalNav() {
    return (
        <div
            className={classNames(
                'grid grid-cols-3 items-center    justify-center  border-gray-300',
                '',
            )}
        >
            {/* Left side with logo */}
            <div className="col-span-1">
                <RedBox />
            </div>
            {/* Right side with nav and auth buttons */}
            <div className="grid grid-cols-12 items-center justify-center col-span-2 col-start-2 ">
                <Navigation />
            </div>
        </div>
    )
}

export default OrderPortalNav
