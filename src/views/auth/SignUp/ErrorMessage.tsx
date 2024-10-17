import React, { HTMLProps, ReactNode } from 'react'

import { motion } from 'framer-motion'

interface IErrorMessage {
    isError: boolean
    className?: string
    children: ReactNode
}

function ErrorMessage({ isError, className, children }: IErrorMessage) {
    return isError ? (
        <motion.div
            className="text-center"
            animate={{ x: [0, -10, 0, 10, 0] }}
            transition={{
                duration: 0.2,
                ease: 'linear',
                repeat: 1,
            }}
        >
            {children}
        </motion.div>
    ) : null
}

export default ErrorMessage
