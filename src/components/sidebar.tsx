import { Link, useLocation } from "react-router-dom"
import { LuPieChart, LuCalendarRange, LuSunrise, LuShield } from 'react-icons/lu'
import Logo from '../assets/logo.png'
const Sidebar = () => {
    const location = useLocation();
    const sideLink = [{
        id: 1,
        to: "/dashboard",
        url: <LuPieChart size={25} />,
        name: "Dashboard"
    }, {
        id: 2,
        to: "/mentee",
        url: <LuCalendarRange size={25} />,
        name: "Presensi"
    }, {
        id: 3,
        to: "/user",
        url: <LuShield size={25} />,
        name: "Reimburstmen"
    }, {
        id: 4,
        to: "/class",
        url: <LuShield size={25} />,
        name: "Reimburstmen Karyawan"
    }, {
        id: 5,
        to: "/class",
        url: <LuSunrise size={25} />,
        name: "Cuti"
    }]

    
    return (
        <div>
            <div className="space-y-4 h-screen bg-white">
                <div className="px-4 py-5">
                    <img src={Logo} className="w-3/5" alt="" />
                </div>
                {
                    sideLink.map((element, index) => {
                        return (
                            <div key={index}>
                                <div className="space-y-2 font-medium flex justify-center px-4">
                                    <Link to={element.to}>
                                        <div
                                            className={`cursor-pointer w-full md:w-40 lg:w-60 flex items-center py-2 px-4 rounded-lg hover:bg-bgBtn hover:text-text ${location.pathname === element.to ? "bg-bgBtn rounded-xl shadow-lg text-text font-semibold" : ""
                                                }`}
                                        >
                                            <span>{element.url}</span>
                                            <h1 className="px-4 hidden md:block lg:block text-sm">{element.name}</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar