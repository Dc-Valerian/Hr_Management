import { Outlet } from "react-router-dom"
import { Sidebar, Header } from "../Static"

const Dashboardlayout = () => {
  return (
    <div className="w-full h-screen relative flex">
        <div className="w-64 h-full sticky top-0 left-0">
            <Sidebar />
        </div>
        <div className="flex-1 h-full relative overflow-x-hidden">
            <div className="w-full h-[70px] sticky z-[2] top-0 right-0 bg-[red]">
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboardlayout