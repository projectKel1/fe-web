import { Link, useLocation, useNavigate } from "react-router-dom"
import { LuPieChart, LuCalendarRange, LuShield, LuBuilding, LuUser2, LuCircleDollarSign, LuBriefcase } from 'react-icons/lu'
import Logo from '../assets/logo.png'
import React, { useEffect } from "react"
import Cookies from "js-cookie"
interface Slide {
    slide: boolean
}
const Sidebar: React.FC<Slide> = ({ slide }) => {
    const location = useLocation();
    const sideLink = [{
        to: "/dashboard",
        url: <LuPieChart size={25} />,
        name: "Dashboard"
    }, {
        to: "/attendance-manager",
        url: <LuCalendarRange size={25} />,
        name: "Attendance Manager"
    }, {
        to: "/reimbursement-manager",
        url: <LuCircleDollarSign size={25} />,
        name: "Reimbursement Manager"
    }, {
        to: "/list-employee",
        url: <LuUser2 size={25} />,
        name: "List Employee"
    }, {
        to: "/Company",
        url: <LuBuilding size={25} />,
        name: "Company"
    }, {
        to: "/reimbursement-karyawan-manager",
        url: <LuShield size={25} />,
        name: "Reimburstmen Employee"
    }, {
        to: "/class",
        url: <LuBriefcase size={25} />,
        name: "Leave"
    }]
    const navigate = useNavigate()
    useEffect(() => {
        if (!Cookies.get('data')) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <div className="space-y-4 h-screen">
                <div className="ml-7 py-5 flex gap-2 items-center">
                    <div>
                        <img src={Logo} className="w-10" alt="" />
                    </div>
                    {
                        slide ? (
                            null
                        ) : (
                            <h1 className="font-semibold">
                                HRIS App
                            </h1>
                        )
                    }
                </div>
                {
                    sideLink.map((element, index) => {
                        return (
                            <div key={index}>
                                <div className="space-y-2 font-medium flex px-4">
                                    <Link to={element.to}>
                                        <div className={`cursor-pointer w-52 flex items-center py-2 px-4 rounded-lg hover:w-auto hover:bg-bgBtn text-gray-700 hover:animations hover:text-white ${location.pathname === element.to ? "bg-bgBtn rounded-xl shadow-lg text-white font-bold" : "font-semibold"
                                            }`}>
                                            <span>{element.url}</span>
                                            <div>
                                                <h1 className={`px-4 ${slide ? `hidden` : ``} tracking-wide text-sm`}>{element.name}</h1>
                                            </div>
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