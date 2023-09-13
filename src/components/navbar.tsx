import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="shadow-lg w-full">
            <div className="flex justify-end mx-6 my-4 items-center">
                <div onClick={() => handleOpen()} className='cursor-pointer flex items-center gap-2'>
                    <h1 className=" text-sm font-semibold">
                        Halo,Test
                    </h1>
                    <div>
                        <LuChevronDown />
                    </div>
                </div>
                {
                    open ? (
                        <div className="z-10 absolute top-14 divide-y divide-gray-100 rounded-lg shadow w-44">
                            <div className="px-4 py-3 text-sm">
                                <div className="font-medium">name@email.com</div>
                            </div>
                            <div className="py-2 text-sm">
                                <div className='cursor-pointer'>
                                    <div className="block px-4 py-2 hover:bg-gray-100">Profile</div>
                                </div>
                            </div>
                            <div className="py-1">
                                <div className="block cursor-pointer px-4 py-2 text-sm hover:bg-gray-100">Sign out</div>
                            </div>
                        </div>
                    ) : null
                }

            </div>
        </div>
    );
};
export default Navbar