import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
const Layout = () => {
    return (
        <div className="flex">
            <div className="flex shadow-lg flex-col w-1/6">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col">
                <Navbar />
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Layout