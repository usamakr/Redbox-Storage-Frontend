import React from 'react'

// Constants
import { APP_NAME } from '@/constants/app.constant'

// Icons
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

function OrderPortalFooter() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 w-full border-t border-gray-300 p-1 ">
            <div className="hidden  grid-rows-2 col-span-1 col-start-1 text-center p-2">
                <a
                    href="/contact"
                    className="hover:text-gray-800 hover:font-bold"
                >
                    Contact
                </a>
                <a
                    href="/about"
                    className="hover:text-gray-800 hover:font-bold"
                >
                    About Us
                </a>
            </div>
            <div className="text-center p-2 items flex justify-center items-center">
                <p>{`© Copyright 2024. ${APP_NAME}.`}</p>
            </div>
            <div className=" flex justify-center gap-2 p-2 items-center align-middle ">
                <FaFacebookSquare className="hover:text-blue-500 size-7 hover:size-7 cursor-pointer" />
                <FaInstagramSquare className="hover:text-pink-600 size-7 hover:size-7 cursor-pointer" />
                <FaWhatsappSquare className="hover:text-green-500 size-7 hover:size-7 cursor-pointer" />
                <FaTwitterSquare className="hover:text-blue-400 size-7 hover:size-7 cursor-pointer" />
            </div>
        </div>
    )
}

export default OrderPortalFooter
