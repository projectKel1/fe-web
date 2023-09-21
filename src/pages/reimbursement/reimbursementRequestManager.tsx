const ReimbursementRequestManager = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Reimbursement  Request Manager
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ReimbursementRequestManager