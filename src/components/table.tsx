import { LuFileEdit, LuTrash2 } from "react-icons/lu"

const Table = () => {
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left  font-semibold">
                    <thead className="text-md uppercase border-b-2">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                information
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type Reimbursement
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Request Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                Abdul
                            </td>
                            <td className="px-6 py-4">
                                Pasang Gigi Baru
                            </td>
                            <td className="px-6 py-4">
                                Sakit
                            </td>
                            <td className="px-6 py-4">
                                21/01/2023
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex font-semibold items-center bg-red-100 text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded-full">
                                    <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                                    Pending
                                </span>
                            </td>
                            <td className="px-6 py-4 flex gap-5">
                                <div className="text-green-800 cursor-pointer">
                                    <LuFileEdit size={25} />
                                </div>
                                <div className="text-red-800">
                                    <LuTrash2 size={25} />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b bg-bgCard">
                            <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                Abdul
                            </td>
                            <td className="px-6 py-4">
                                Pasang Gigi Baru
                            </td>
                            <td className="px-6 py-4">
                                Sakit
                            </td>
                            <td className="px-6 py-4">
                                21/01/2023
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center bg-green-200 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                                    <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                                    Approved
                                </span>
                            </td>
                            <td className="px-6 py-4 flex gap-5">
                                <div className="text-green-800 cursor-pointer">
                                    <LuFileEdit size={25} />
                                </div>
                                <div className="text-red-800">
                                    <LuTrash2 size={25} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table