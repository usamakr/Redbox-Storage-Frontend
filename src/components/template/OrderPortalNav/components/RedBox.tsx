import React from 'react'

// Theme
import { themeConfig } from '@/configs/theme.config'

// Icons
import RedBoxLogo from '@/assets/png/BoxIcon.png'

// Libs
import classNames from 'classnames'

function RedBox() {
    return (
        <div className="flex gap-2 items-center">
            <img src={RedBoxLogo} style={{ width: '3rem', height: 'auto' }} />
            <p
                className={classNames(
                    'RedBoxFont text-3xl',
                    'text-nowrap text-center',
                    `text-${themeConfig.redBoxColor}`,
                )}
            >
                Red Box Storage
            </p>
        </div>
    )
}

export default RedBox
