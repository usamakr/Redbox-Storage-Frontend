// Libs
import { motion } from 'framer-motion'

// Components
import SignUpForm from './SignUpForm'

// Picture
import RedBoxStoreFront from '@/assets/webp/RedBoxStoreFront.webp'
import OrderPortalFooter from '@/components/template/OrderPortalFooter'
import { Card } from '@/components/ui'

const SignUp = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-0 w-full h-min  ">
            <div className="hidden xl:block xl:w-full shadow-md h-full">
                <img
                    src={RedBoxStoreFront}
                    className="object-top mx-auto invisible xl:visible object-scale-down "
                    style={{ width: 'auto', height: '100%' }}
                />
            </div>
            <div className="flex flex-grow  justify-center  ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col h-full gap-y-6 p-10 xl:p-10 xl:pt-4 pt-10 pb-10  "
                >
                    <div className="h-min">
                        <h3 className="mb-1 pt-3">
                            Welcome to Redbox Storage.
                        </h3>
                        <p className="">Let's sign you up!</p>
                    </div>
                    <div className="flex flex-col gap-4 h-full ">
                        <SignUpForm
                            disableSubmit={false}
                            className="pl-8 pr-8 overflow-y-scroll"
                        />
                        <OrderPortalFooter />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SignUp
