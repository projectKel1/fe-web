import { LuFileEdit, LuTrash2 } from "react-icons/lu"
import CardLeave from "../../components/cardLeave"

const LeaveManagerEmployee = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2">
                <CardLeave tittle="List Leave" subTittle="Check List Leave" />
            </div>
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Leave
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
                                        Long Leave
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Request Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Leave Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        File
                                    </th>
                                    <th scope="col" className="px-6 text-center py-3">
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
                                        3 Hari
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
                                    <td className="px-6 py-4 gap-5">
                                        <div className="flex gap-3 justify-center items-center">
                                            <div className="text-green-800 cursor-pointer">
                                                <LuFileEdit size={25} />
                                            </div>
                                            <div className="text-red-800 cursor-pointer">
                                                <LuTrash2 size={25} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b hover:bg-green-200 bg-bgCard">
                                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                        Abdul
                                    </td>
                                    <td className="px-6 py-4">
                                        3 Hari
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
                                    <td className="px-6 py-4 gap-5">
                                        <div className="flex gap-3 justify-center items-center">
                                            <div className="text-green-800 cursor-pointer">
                                                <LuFileEdit size={25} />
                                            </div>
                                            <div className="text-red-800 cursor-pointer">
                                                <LuTrash2 size={25} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveManagerEmployee