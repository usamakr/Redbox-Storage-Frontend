// Libs
import { motion } from 'framer-motion'

// Components
import SignInForm from './SignInForm'

// Picture
import RedBoxStoreFront from '@/assets/webp/RedBoxStoreFront.webp'
import OrderPortalFooter from '@/components/template/OrderPortalFooter'

const SignIn = () => {
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-0 w-full">
            <div className="hidden lg:block lg:w-full">
                <img
                    src={RedBoxStoreFront}
                    className="object-top mx-auto invisible lg:visible object-contain"
                    style={{ width: 'auto', height: '100%' }}
                />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1.0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-y-10  p-10 lg:p-20 lg:pt-4 pt-10 pb-10 overflow-y-scroll h-[600px]  "
            >
                <div className="h-min ">
                    <h3 className="mb-1 pt-3 ">Welcome back!</h3>
                    <p className="">Please enter your credentials to start!</p>
                </div>
                <div className="flex flex-col gap-4">
                    <SignInForm disableSubmit={false} className="pl-8 pr-8" />
                    <OrderPortalFooter />
                </div>
            </motion.div>
        </div>
    )
}

export default SignIn
