import Cookies from "js-cookie";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const tempData: any = Cookies.get('data')
  const Data = JSON.parse(tempData)
  const getRole = Data.data.role_name.toLowerCase()
  const navigate = useNavigate()

  const handleOut = () => {
    Cookies.remove('data')
    navigate('/login')
  }
  return (
    <div className="shadow-lg w-full">
      <div className="flex justify-end mx-6 my-4 items-center ">
        <h1 className="font-semibold pr-2 text-lg">Hi, {getRole}</h1>
        <div onClick={() => setOpen(!open)} className="cursor-pointer" >
          <img className=" w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 " src="https://placekitten.com/200/300" alt="Bordered avatar"></img>
        </div>
      </div>
      {
        open ? (
          <motion.div
            animate={{ y: 10 }}
            exit={{ opacity: 0 }}
            className="z-10 absolute right-10 shadow-lg bg-white divide-y divide-gray-100 rounded-lg w-44">
            <ul className="py-2 font-semibold">
              <li>
                <div onClick={() => navigate('/profile')} className="block px-4 py-2 hover:bg-gray-100 ">Profile</div>
              </li>
            </ul>
            <div className="py-1">
              <div onClick={handleOut} className="block px-4 py-2 hover:bg-gray-100">Sign out</div>
            </div>
          </motion.div>
        ) : null
      }
    </div>
  );
};
export default Navbar;
