import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";
import { motion } from 'framer-motion'

const Layout = () => {
    const [open, setOpen] = useState(false)
    const variant = {
        expand: { width: "5%" },
        nonExpand: { width: "15%" }
    }
    console.log(open)
    return (
        <div className="flex">
            <motion.div
                animate={open ? "expand" : "nonExpand"}
                variants={variant}
                className={`flex shadow-lg flex-col`}>
                <Sidebar slide={open} />
            </motion.div>
            <div onClick={() => setOpen(!open)} className={`w-10 h-10 rounded-lg  ${open ? `left-[75px]` : `left-56`} cursor-pointer shadow-lg bg-gray-100 flex justify-center items-center`}>
                {
                    open ? (
                        <LuChevronRight />
                    ) : (
                        <LuChevronLeft />
                    )
                }
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