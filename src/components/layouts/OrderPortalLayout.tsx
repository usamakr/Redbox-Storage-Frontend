import OrderPortalNav from '../template/OrderPortalNav'
import View from '@/views'

const OrderPortalLayout = () => {
    return (
        <div className="app-layout-classic flex flex-auto flex-col overflow-y-hidden">
            <div className="flex flex-auto min-w-0">
                {/* <SideNav /> */}
                <div className="flex flex-col min-w-0  w-full min-h-screen relative">
                    <OrderPortalNav />
                    <div className="flex flex-grow items-start justify-center w-full ">
                        <View />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPortalLayout
