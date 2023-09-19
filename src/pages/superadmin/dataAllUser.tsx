import { LuFileEdit, LuTrash2 } from 'react-icons/lu';
import Button from '../../components/button';
import { useState } from 'react';
import Popup from '../../components/popup';
import { motion } from 'framer-motion';

const DataAllUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="p-5 h-full bg-bgMain">
      <div className="rounded-cardBase bg-white w-full">
        <div className="p-5">
          <h1 className="font-bold text-2xl">Data All User</h1>
          <p className="text-subTitle font-semibold text-lg">
            Check Data All User Here
          </p>
          <div className=" flex flex-wrap justify-end">
            <div>
              <Button
                onClick={handleOpen}
                textBtn="Add User"
                color="bg-bgBtn"
              />
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <Popup onConfirm={handleClose}>
          <motion.div
            animate={{ y: 10 }}
            className="relative w-full max-w-md max-h-full"
          >
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Request Reimbursement
                </h3>
                <form className="space-y-4" action="#">
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Email
                    </label>
                    <input
                      type="text"
                      name="text"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Email
                    </label>
                    <input
                      type="text"
                      name="text"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Email
                    </label>
                    <input
                      type="text"
                      name="text"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div className="flex gap-2 py-2 justify-end">
                    <button
                      type="button"
                      onClick={() => handleClose()}
                      className=" text-white bg-bgBtnRed rounded-cardBase font-semibold text-sm px-5 py-2.5 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" text-white bg-bgBtn font-semibold rounded-cardBase text-sm px-8 py-2.5 text-center"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </Popup>
      ) : null}
      <div className="my-2 w-full bg-white rounded-cardBase">
        <table className="w-full text-sm text-left  font-semibold">
          <thead className="text-md uppercase border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="bg-white border-b hover:bg-gray-300">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Super Admin PT Abc
              </td>
              <td className="px-6 py-4">superadmin@alteraid.com</td>
              <td className="px-6 py-4">Active</td>
              <td className="px-6 py-4">Superadmin</td>
              <td className="px-6 py-4">MANAGER</td>
              <td className="px-6 py-4 flex gap-5">
                <div className="text-green-800 cursor-pointer">
                  <LuFileEdit size={25} />
                </div>
                <div className="text-red-800">
                  <LuTrash2 size={25} />
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-green-200 bg-bgCard">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Super Admin PT Abc
              </td>
              <td className="px-6 py-4">superadmin@alteraid.com</td>
              <td className="px-6 py-4">Active</td>
              <td className="px-6 py-4">Superadmin</td>
              <td className="px-6 py-4">HR</td>
              <td className="px-6 py-4 flex gap-5">
                <div className="text-green-800 cursor-pointer">
                  <LuFileEdit size={25} />
                </div>
                <div className="text-red-800">
                  <LuTrash2 size={25} />
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-300">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Super Admin PT Abc
              </td>
              <td className="px-6 py-4">superadmin@alteraid.com</td>
              <td className="px-6 py-4">Non-Active</td>
              <td className="px-6 py-4">NON-HR</td>
              <td className="px-6 py-4">EMPLOYEE</td>
              <td className="px-6 py-4 flex gap-5">
                <div className="text-green-800 cursor-pointer">
                  <LuFileEdit size={25} />
                </div>
                <div className="text-red-800">
                  <LuTrash2 size={25} />
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-green-200 bg-bgCard">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Super Admin PT Abc
              </td>
              <td className="px-6 py-4">superadmin@alteraid.com</td>
              <td className="px-6 py-4">Non-Active</td>
              <td className="px-6 py-4">HR</td>
              <td className="px-6 py-4">EMPLOYEE</td>
              <td className="px-6 py-4 flex gap-5">
                <div className="text-green-800 cursor-pointer">
                  <LuFileEdit size={25} />
                </div>
                <div className="text-red-800">
                  <LuTrash2 size={25} />
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-300">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Super Admin PT Abc
              </td>
              <td className="px-6 py-4">superadmin@alteraid.com</td>
              <td className="px-6 py-4">Active</td>
              <td className="px-6 py-4">Superadmin</td>
              <td className="px-6 py-4">EMPLOYEE</td>
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
      <div className="flex justify-end space-x-4 m-3">
        <button className="outline outline-bgBtn px-10 py-4 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center w-48">
          Previous
        </button>
        <button className="outline outline-bgBtn px-10 py-4 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center w-48">
          Next
        </button>
      </div>
    </div>
  );
};

export default DataAllUser;
