import CardLeave from "../../components/cardLeave"
import Table from "../../components/table"

const LeaveManager = () => {
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
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase border-b-2">
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
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Abdul
                                    </th>
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
                                        file.jpg
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <a href="#" className="font-medium text-blue-600  hover:underline">Reject</a>
                                        <a href="#" className="font-medium text-blue-600  hover:underline">Approve</a>
                                    </td>
                                </tr>
                                <tr className="border-b bg-bgCard">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Abdul
                                    </th>
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
                                        file.jpg
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <a href="#" className="font-medium text-blue-600  hover:underline">Reject</a>
                                        <a href="#" className="font-medium text-blue-600  hover:underline">Approve</a>
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

export default LeaveManager