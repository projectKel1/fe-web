import { LuFileEdit, LuTrash2 } from 'react-icons/lu';
import Button from '../../components/button';
import { useState, useEffect } from 'react';
import Popup from '../../components/popup';
import { motion } from 'framer-motion';
import axios from 'axios';

interface Data {
  fullname: string;
  email: string;
  status: string;
  role_name: string;
  level_name: string;
  id: number;
}

const DataAllUser = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const itemsPerPage = 5;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    try {
      const response = await axios.get(`http://34.101.39.199/users`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJjb21wYW55X25hbWUiOiJQVC4gSmFwZmEgSW5kb25lc2lhIiwiZXhwIjoxNjk1MTE3MjIzLCJsZXZlbCI6IkVNUExPWUVFIiwicm9sZV9uYW1lIjoiU3VwZXJhZG1pbiIsInVzZXJJZCI6Mn0.iTD1ReCB6TyTH4ELNmpbF3nJYF1LgaiZn4S8iPHCazc`,
        },
      });
      console.log(response.data.Data);
      setData(response.data.data);
    } catch {
      console.log('Belum ada data');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const nextPage = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
      setCurrentNumber(currentNumber + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
      setCurrentNumber(currentNumber - itemsPerPage);
    }
  };

  console.log(data);
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
                <h3 className="mb-4 text-xl font-bold text-black">Add User</h3>
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
                      Status
                    </label>
                    <input
                      type="text"
                      name="text"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Role
                    </label>
                    <input
                      type="text"
                      name="text"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Level
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
                No
              </th>
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
            {data
              .slice(startIndex, startIndex + itemsPerPage)
              .map((item: any, index: any) => {
                const bgColor =
                  index % 2 === 0
                    ? 'bg-white hover:bg-gray-300 '
                    : 'bg-bgCard hover:bg-green-200';
                return (
                  <tr key={index} className={`${bgColor}`}>
                    <td scope="row" className="px-6 py-4">
                      {currentNumber + index}
                    </td>
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      {item.fullname}
                    </td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">{item.role_name}</td>
                    <td className="px-6 py-4">{item.level_name}</td>
                    <td className="px-6 py-4 flex gap-5">
                      <div className="text-green-800 cursor-pointer">
                        <LuFileEdit size={25} />
                      </div>
                      <div className="text-red-800">
                        <LuTrash2 size={25} />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div onClick={prevPage} className="flex justify-end space-x-4 m-3">
        <button className="outline outline-bgBtn px-10 py-4 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center w-48">
          Previous
        </button>
        <button
          onClick={nextPage}
          className="outline outline-bgBtn px-10 py-4 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center w-48"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataAllUser;
