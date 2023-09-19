import {
  LuFileEdit,
  LuTrash2,
  LuCheckCircle2,
  LuMinusCircle,
} from 'react-icons/lu';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Popup from './popup';

const Table = () => {
  const [isDelete, setIsDelete] = useState(false);
  const handleOpenDelete = () => {
    setIsDelete(true);
  };
  const handleDeleteClose = () => {
    setIsDelete(false);
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left  font-semibold">
          <thead className="text-md uppercase border-b-2">
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
          <tbody className="text-gray-800">
            <tr className="bg-white border-b hover:bg-gray-300">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Abdul
              </td>
              <td className="px-6 py-4">Pasang Gigi Baru</td>
              <td className="px-6 py-4">Sakit</td>
              <td className="px-6 py-4">21/01/2023</td>
              <td className="px-6 py-4">
                <span className="inline-flex font-semibold items-center bg-red-100 text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded-full">
                  <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 flex gap-5">
                <div className="text-green-800 cursor-pointer">
                  <LuFileEdit size={25} />
                </div>
                <div
                  onClick={() => handleOpenDelete()}
                  className="text-red-800 cursor-pointer"
                >
                  <LuTrash2 size={25} />
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-green-200 bg-bgCard">
              <td scope="row" className="px-6 py-4 whitespace-nowrap">
                Abdul
              </td>
              <td className="px-6 py-4">Pasang Gigi Baru</td>
              <td className="px-6 py-4">Sakit</td>
              <td className="px-6 py-4">21/01/2023</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center bg-green-200 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Approved
                </span>
              </td>
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
      {isDelete ? (
        <Popup onConfirm={handleDeleteClose}>
          <motion.div
            animate={{ y: 10 }}
            className="relative w-full max-w-md max-h-full"
          >
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-10 py-10 flex flex-col space-y-3 ">
                <div className="space-y-2 flex flex-col justify-center items-center">
                  <h3 className="text-xl font-bold text-black">
                    Delete Reimbersment
                  </h3>
                  <p className="text-red-500 text-md">
                    Are You Sure Delete This Reimbersment ?
                  </p>
                </div>

                <div className="flex space-x-5 justify-center ">
                  <button
                    type="button"
                    onClick={() => handleDeleteClose()}
                    className="flex justify-center items-center text-white bg-bgBtnRed rounded-cardBase font-semibold text-sm px-5 py-2.5 text-center"
                  >
                    <span className="mr-2">
                      <LuMinusCircle size={25} />
                    </span>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex justify-center items-center  text-white bg-bgBtn font-semibold rounded-cardBase text-sm px-8 py-2.5 text-center"
                  >
                    <span className="mr-2">
                      <LuCheckCircle2 size={25} />
                    </span>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </Popup>
      ) : null}
    </div>
  );
};

export default Table;
