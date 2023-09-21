const LeaveHrManager = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Leave HR Employee
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
            </div>
        </div>
    )
}

export default LeaveHrManager