import React, { useState } from 'react'
import type { MouseEvent } from 'react'

// Constants
import { themeConfig } from '@/configs/theme.config'

// Icons
import { GiHamburgerMenu } from 'react-icons/gi'

// Components
import Drawer from '@/components/ui/Drawer'
import Button from '@/components/ui/Button'
import NavButtons from './NavButtons'
import AuthButtons from './AuthButtons'
import NavButton from './Button'
import classNames from 'classnames'

function BurgerNav() {
    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = (e: MouseEvent) => {
        setIsOpen(false)
    }

    return (
        <div className="col-span-1 col-start-9">
            <GiHamburgerMenu size={35} fontWeight={20} onClick={openDrawer} />
            <Drawer
                title="Menu"
                isOpen={isOpen}
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                <div className="grid grid-cols-1 gap-2 p-3 w-full justify-between h-full ">
                    <div className="grid grid-cols-1">
                        <NavButton size="lg">Home</NavButton>
                        <NavButton size="lg">Orders</NavButton>
                        <NavButton size="lg">Contact</NavButton>
                        <NavButton size="lg">About</NavButton>
                    </div>
                    <div className="flex flex-col justify-end h-full gap-3 ">
                        <div
                            className={classNames(
                                'border-b-2 m-3',
                                // `border-${themeConfig.redBoxColor}`,
                                `border-gray-400`,
                            )}
                        ></div>
                        <Button
                            variant="default"
                            size="sm"
                            style={{ padding: '0.1rem' }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="solid"
                            size="sm"
                            style={{ padding: '0.1rem' }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default BurgerNav
