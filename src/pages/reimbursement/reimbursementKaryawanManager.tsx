const ReimbursementKaryawanManager = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Reimbursement Karyawan
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
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Abdul
                                    </th>
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
                                        Pending
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
                                        Pasang Gigi Baru
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
        </div >
    )
}

export default ReimbursementKaryawanManager