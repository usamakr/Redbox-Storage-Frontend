import OrderPortalNav from '../template/OrderPortalNav'
import View from '@/views'

const OrderPortalLayout = () => {
    return (
        <div className="app-layout-classic flex flex-auto flex-col overflow-y-hidden h-screen">
            <div className="">
                <div className="h-min">
                    <OrderPortalNav />
                </div>
                <div className="">
                    <View />
                </div>
            </div>
        </div>
    )
}

export default OrderPortalLayout
