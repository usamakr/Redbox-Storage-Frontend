import { themeConfig } from '@/configs/theme.config'
import classNames from 'classnames'
import React, { ReactNode } from 'react'

interface IButton {
    size?: 'sm' | 'lg'
    children?: ReactNode
}

function Button({ size = 'sm', children }: IButton) {
    return (
        <div className="w-min h-full text-center cursor-pointer flex flex-col  justify-center hover:border-b-4 hover:border-b-red-600 box-content">
            <p
                style={
                    size === 'sm'
                        ? { fontSize: '0.9rem', lineHeight: '0.9rem' }
                        : { fontSize: '1.2rem', lineHeight: '1.2rem' }
                }
                className={classNames(
                    'text-center  text-gray-600 font-semibold',
                )}
            >
                {children}
            </p>
        </div>
    )
}

export default Button
