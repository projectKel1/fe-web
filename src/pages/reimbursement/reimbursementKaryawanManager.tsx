import axios from 'axios'
import { useEffect, useState } from 'react'
interface Data {
    nama: string,
    keterangan: string,
    jenis: string,
    status: string
}
const ReimbursementKaryawanManager = () => {
    const [data, setData] = useState<Data[]>([])
    const getData = async () => {
        try {
            const response = await axios.get(`https://62c3aad4876c4700f540123e.mockapi.io/hrReimburstmen`)
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    })
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
                                {
                                    data ? data.map((element, index) => (
                                        <tr key={index} className={`${index % 2 == 0 ? 'bg-white' : 'bg-bgCard '} border-b`}>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
                                                {element.status}
                                            </td>
                                            <td className="px-6 py-4 flex gap-2">
                                                <a href="#" className="font-medium text-blue-600  hover:underline">Reject</a>
                                                <a href="#" className="font-medium text-blue-600  hover:underline">Approve</a>
                                            </td>
                                        </tr>
                                    )) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ReimbursementKaryawanManager