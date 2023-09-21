import CardTarget from "../../components/cardTarget"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Popup from "../../components/popup"
const TargetManager = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2">
                <CardTarget tittle="List Target Employee " subTittle="Check List Target Employee" />
            </div>
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-2">
                    <div className="py-2 w-full bg-white rounded-cardBase">
                        <div className="p-5">
                            <h1 className="font-semibold underline-offset-8 underline">
                                History Target Employee
                            </h1>
                        </div>
                        <div className="p-2">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left font-semibold">
                                    <thead className="text-md uppercase border-b-2">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Produk
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Qty
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Create Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Deadline Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                File
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-800">
                                        <tr className="bg-white border-b hover:bg-gray-300">
                                            <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                                Abdul
                                            </td>
                                            <td className="px-6 py-4">
                                                Lipstick
                                            </td>
                                            <td className="px-6 py-4">
                                                100
                                            </td>
                                            <td className="px-6 py-4">
                                                21/01/2023
                                            </td>
                                            <td className="px-6 py-4">
                                                21/01/2023
                                            </td>
                                            <td className="px-6 py-4">
                                                Belum Approve
                                            </td>
                                            <td className="px-6 py-4">
                                                <img src="https://placekitten.com/200/300" className="w-20" alt="" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="border-2 w-1/2 border-gray-700 rounded-cardBase hover:bg-gray-800 hover:text-white cursor-pointer">
                                                    <button className='cursor-pointer px-4 py-2' onClick={handleOpen}>
                                                        Detail
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-b hover:bg-green-200 bg-bgCard">
                                            <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                                Abdul
                                            </td>
                                            <td className="px-6 py-4">
                                                Kaca Mata
                                            </td>
                                            <td className="px-6 py-4">
                                                100
                                            </td>
                                            <td className="px-6 py-4">
                                                Sakit
                                            </td>
                                            <td className="px-6 py-4">
                                                21/01/2023
                                            </td>
                                            <td className="px-6 py-4">
                                                Pending
                                            </td>
                                            <td className="px-6 py-4">
                                                <img src="https://placekitten.com/200/300" className="w-20" alt="" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="border-2 w-1/2 border-gray-700 rounded-cardBase hover:bg-gray-800 hover:text-white cursor-pointer">
                                                    <button className='cursor-pointer px-4 py-2' onClick={handleOpen}>
                                                        Detail
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {
                            open ? (
                                <Popup onConfirm={handleClose}>
                                    <motion.div
                                        animate={{ y: 10 }}
                                        className="relative w-auto max-h-full">
                                        <div className="relative bg-white rounded-lg shadow">
                                            <div className="px-6 py-6 lg:px-8">
                                                <h3 className="mb-4 text-xl font-bold text-black">
                                                    List Target Abdul
                                                </h3>
                                                <table className="w-full text-sm text-left font-semibold">
                                                    <thead className="text-md uppercase border-b-2">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3">
                                                                Produk
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Qty
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Deadline Date
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Status
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                File
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-gray-800">
                                                        <tr className="bg-white  border-b hover:bg-gray-300">
                                                            <td className="px-6 py-4">
                                                                Lipstick
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                100
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                21/01/2023
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                Belum Approve
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <img src="https://placekitten.com/200/300" className="w-10" alt="" />
                                                            </td>
                                                            <td className="px-6 py-4 flex justify-center gap-5">
                                                                <div className="text-red-800 border-2 border-red-800 rounded-cardBase hover:bg-red-800 hover:text-white cursor-pointer">
                                                                    <div className='px-4 py-2'>
                                                                        Reject
                                                                    </div>
                                                                </div>
                                                                <div className="text-green-800 border-2 border-bgBtn rounded-cardBase hover:bg-green-800 hover:text-white cursor-pointer">
                                                                    <div className='px-4 py-2'>
                                                                        Approve
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Popup>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TargetManager