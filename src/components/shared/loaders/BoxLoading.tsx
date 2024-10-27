import React from 'react'
import Lottie from 'lottie-react'

// Loading animation
import BoxLoadingAnim from '@/assets/lottie/BoxLoading.json'

function BoxLoading() {
    return (
        <div className="h-[100px] w-[100px]">
            <Lottie animationData={BoxLoadingAnim} loop={false} />
        </div>
    )
}

export default BoxLoading
