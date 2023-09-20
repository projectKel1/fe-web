import {
  LuFileEdit,
  LuTrash2,
  LuCheckCircle2,
  LuMinusCircle,
} from 'react-icons/lu';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Popup from './popup';
import Cookies from 'js-cookie';
import axios from 'axios';

const TableAttandance = () => {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const handleOpenDelete = () => {
    setIsDelete(true);
  };
  const handleDeleteClose = () => {
    setIsDelete(false);
  };

  const getData = async () => {
    const token = Cookies.get('token');

    try {
      const response = await axios.get(
        `https://node.flattenbot.site/attendances`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch {
      console.log('Belum ada data');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left  font-semibold">
          <thead className="text-md uppercase border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Working Hours
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data.map((item, index) => {
              const timestampCreated = new Date(item.created_at);
              const hoursCreated = timestampCreated
                .getHours()
                .toString()
                .padStart(2, '0');
              const minutesCreated = timestampCreated
                .getMinutes()
                .toString()
                .padStart(2, '0');
              const dayCreated = timestampCreated
                .getDate()
                .toString()
                .padStart(2, '0');
              const monthCreated = (timestampCreated.getMonth() + 1)
                .toString()
                .padStart(2, '0');
              const yearCreated = timestampCreated.getFullYear();
              const formattedDateTimeCreated = `${hoursCreated}:${minutesCreated}`;

              const timestampUpdated = new Date(item.updated_at);
              const hoursUpdated = timestampUpdated
                .getHours()
                .toString()
                .padStart(2, '0');
              const minutesUpdated = timestampUpdated
                .getMinutes()
                .toString()
                .padStart(2, '0');
              const dayUpdated = timestampUpdated
                .getDate()
                .toString()
                .padStart(2, '0');
              const monthUpdated = (timestampUpdated.getMonth() + 1)
                .toString()
                .padStart(2, '0');
              const yearUpdated = timestampUpdated.getFullYear();
              const formattedDateTimeUpdated = `${hoursUpdated}:${minutesUpdated}`;
              return (
                <tr key={index} className="bg-white border-b hover:bg-gray-300">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    {formattedDateTimeCreated} - {formattedDateTimeUpdated} -{' '}
                    {dayCreated}/{monthCreated}/{yearCreated}
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
              );
            })}
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
                    Delete Attandance
                  </h3>
                  <p className="text-red-500 text-md">
                    Are You Sure Delete This Attandance ?
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

export default TableAttandance;
