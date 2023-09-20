const ReimbursementManagerEmployee = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Reimbursement Manager Employee
                    </h1>
                </div>
                <div className="p-2">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left font-semibold">
                            <thead className="text-xs uppercase border-b-2">
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
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    data ? data.map((element, index) => (
                                        <tr key={index} className={`${index % 2 == 0 ? 'bg-white hover:bg-gray-300' : 'bg-bgCard hover:bg-green-200'} border-b`}>
                                            <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                                {element.nama}
                                            </td>
                                            <td className="px-6 py-4">
                                                {element.keterangan}
                                            </td>
                                            <td className="px-6 py-4">
                                                {element.jenis}
                                            </td>
                                            <td className="px-6 py-4">
                                                12/01/2023
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex font-semibold items-center bg-green-100 text-green-800 text-sm mr-2 px-2.5 py-0.5 rounded-full">
                                                    <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                                                    {element.status}
                                                </span>
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
                                    )) : null
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ReimbursementManagerEmployee