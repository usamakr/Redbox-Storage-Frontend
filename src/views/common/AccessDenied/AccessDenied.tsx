import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

// Animations
import AccessDeniedAnim from '@/assets/lottie/AccessDenied.json'

function AccessDenied() {
    return (
        <div className="h-full w-full grid grid-cols-1 place-items-center">
            <div className="h-[100px] w-[100px]">
                <Lottie animationData={AccessDeniedAnim} loop={false} />
            </div>
            <p>Access denied.</p>
        </div>
    )
}

export default AccessDenied
