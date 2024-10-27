import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

// Animations
import AccessDeniedAnim from '@/assets/lottie/AccessDenied.json'
import Container from '@/components/shared/Container'
import { DoubleSidedImage } from '@/components/shared'

const AccessDenied = () => {
    return (
        <Container className="h-4/5">
            <div className="h-full flex flex-col items-center justify-center">
                <DoubleSidedImage
                    src="/img/others/img-2.png"
                    darkModeSrc="/img/others/img-2-dark.png"
                    alt="Access Denied!"
                />
                <div className="mt-6 text-center">
                    <h3 className="mb-2">Access Denied</h3>
                    <p className="text-base">
                        You do not have permission to visit this page
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default AccessDenied
