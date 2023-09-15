import { LuFileEdit, LuTrash2 } from "react-icons/lu";

import CardHr from "../../components/cardHr";

const EmployeeHr = () => {
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2">
        <CardHr
          tittle="List Employee "
          subTittle="Check List Employee"
          textBtn="Add Employee"
        />
      </div>
      <div className="py-2 w-full bg-white rounded-cardBase">
        <div className="p-2">
          <div className="py-2 w-full bg-white rounded-cardBase">
            <div className="p-5">
              <h1 className="font-semibold underline-offset-8 underline">
                List Employee
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
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Gender
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
                      <td className="px-6 py-4">abdul@mail.com</td>
                      <td className="px-6 py-4">Active</td>
                      <td className="px-6 py-4">Male</td>
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
                      <td className="px-6 py-4">abdul@mail.com</td>
                      <td className="px-6 py-4">Active</td>
                      <td className="px-6 py-4">Male</td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHr;
