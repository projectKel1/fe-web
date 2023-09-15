import CardTarget from '../../components/cardTarget';
import { LuFileEdit, LuTrash2 } from 'react-icons/lu';

const TargetEmployee = () => {
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2">
        <CardTarget
          tittle="Target Karyawan "
          subTittle="Check Target Karyawan"
        />
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
                    <tr className="bg-white border-b ">
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        Abdul
                      </td>
                      <td className="px-6 py-4">Lipstick</td>
                      <td className="px-6 py-4">20</td>
                      <td className="px-6 py-4">21/01/2023</td>

                      <td className="px-6 py-4">Approve</td>
                      <td className="px-6 py-4">file.jpg</td>
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
                      <td className="px-6 py-4">Kaca Mata</td>
                      <td className="px-6 py-4">10</td>
                      <td className="px-6 py-4">26/01/2023</td>
                      <td className="px-6 py-4">Pending</td>
                      <td className="px-6 py-4">file.jpg</td>
                      <td className="px-6 py-4 flex gap-5">
                        <div className="text-green-800 cursor-pointer">
                          <LuFileEdit size={25} />
                        </div>
                        <div className="text-red-800 cursor-pointer">
                          <LuTrash2 size={25} />
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
  );
};

export default TargetEmployee;
