import Header from '@/components/template/Header'
import SideNavToggle from '@/components/template/SideNavToggle'
import SidePanel from '@/components/template/SidePanel'
import MobileNav from '@/components/template/MobileNav'
import UserDropdown from '@/components/template/UserDropdown'
import SideNav from '@/components/template/SideNav'
import OrderPortalNav from '../template/OrderPortalNav'
import View from '@/views'
import OrderPortalFooter from '../template/OrderPortalFooter'

const HeaderActionsStart = () => {
    return (
        <>
            <MobileNav />
            <SideNavToggle />
        </>
    )
}

const HeaderActionsEnd = () => {
    return (
        <>
            <SidePanel />
            <UserDropdown hoverable={false} />
        </>
    )
}

const OrderPortalLayout = () => {
    return (
        <div className="app-layout-classic flex flex-auto flex-col overflow-y-hidden">
            <div className="flex flex-auto min-w-0">
                {/* <SideNav /> */}
                <div className="flex flex-col min-w-0  w-full min-h-screen relative">
                    <OrderPortalNav />
                    <div className="flex flex-grow items-start justify-center w-full h-full ">
                        <View />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPortalLayout
