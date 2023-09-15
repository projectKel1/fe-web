import CardTarget from "../../components/cardTarget"

const TargetManager = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2">
                <CardTarget tittle="List Target Karyawan " subTittle="Check List Target Karyawan" />
            </div>
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-2">
                    <div className="py-2 w-full bg-white rounded-cardBase">
                        <div className="p-5">
                            <h1 className="font-semibold underline-offset-8 underline">
                                History Target Karyawan
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
                                                    <div className='px-4 py-2'>
                                                        Detail
                                                    </div>
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
                                                    <div className='px-4 py-2'>
                                                        Detail
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
            </div>
        </div>
    )
}

export default TargetManager