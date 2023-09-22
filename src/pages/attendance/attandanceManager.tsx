import Button from '../../components/button';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { LuLogOut } from 'react-icons/lu';

interface Data {
  id: number;
  created_at: string;
  updated_at: string;
  is_checkout: boolean;
}

const AttandanceManager = () => {
  // const [attendanceId, setAttendanceId] = useState<Data[]>();
  const [data, setData] = useState<Data[]>([]);
  // const [isDelete, setIsDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const token = Cookies.get('token');

  const getData = async (page: number) => {
    const token = Cookies.get('token');
    const pageNumber = page;
    try {
      const response = await axios.get(
        `https://node.flattenbot.site/attendances?page=${pageNumber}`,
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

  const handleCheckIn = () => {
    axios
      .post(
        `https://node.flattenbot.site/attendances`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
        getData(currentPage);
      })
      .catch((error) => {
        toast.error('Mohon coba lagi nanti.' + error);
      });
  };

  const handleCheckOut = (id: number) => {
    const idAtt = id;
    console.log(idAtt, 'error');
    axios
      .put(
        `https://node.flattenbot.site/attendances/${idAtt}}`,
        {
          is_checkout: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
        console.log(response.data + 'text checkout');
        getData(currentPage);
      })
      .catch((error) => {
        toast.error('Mohon coba lagi nanti.' + error);
        console.log(error);
      });
  };

  useEffect(() => {
    getData(currentPage);
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="">
        <div className="rounded-cardBase bg-white w-full p-10">
          <div>
            <h1 className="font-semibold text-2xl">Presensi Jam Kerja</h1>
            <p className="text-subTitle font-semibold text-lg">
              Cek Absensi Disini
            </p>
          </div>
          <div className="py-10 flex flex-wrap justify-between">
            <div>
              <div className="py-1">
                <h1 className="font-bold">Jam Check In</h1>
              </div>
              <div className="py-1">
                <span className="font-semibold text-gray-700">
                  08 : 00 - 12/01/2023
                </span>
              </div>
              <div>
                <Button
                  onClick={handleCheckIn}
                  textBtn="Check In"
                  color="bg-bgBtn"
                />
              </div>
            </div>
            <div>
              <div className="py-1">
                <h1 className="font-bold">Jam Check Out</h1>
              </div>
              <div className="py-1">
                <span className="font-semibold text-gray-700">
                  17 : 00 - 12/01/2023
                </span>
              </div>
              <div>
                <Button textBtn="Check Out" color="bg-bgBtnRed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 w-full bg-white rounded-cardBase">
        <div className="p-5">
          <h1 className="font-semibold underline-offset-8 underline">
            History Attendance
          </h1>
        </div>
        <div className="p-2">
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
                      Information
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

                    const formattedDateTimeUpdated = `${hoursUpdated}:${minutesUpdated}`;
                    const rowNumber = (currentPage - 1) * 5 + index + 1;
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b hover:bg-gray-300"
                      >
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">
                          {rowNumber}
                        </td>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">
                          {formattedDateTimeCreated} -{' '}
                          {formattedDateTimeUpdated} - {dayCreated}/
                          {monthCreated}/{yearCreated}
                        </td>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={
                              item.is_checkout
                                ? 'text-green-500'
                                : 'text-red-500'
                            }
                          >
                            {item.is_checkout ? 'Done' : 'Working'}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex ">
                          <div
                            onClick={() => {
                              handleCheckOut(item.id);
                            }}
                            className="text-white bg-bgBtnRed p-1 hover:bg-red-600 cursor-pointer"
                          >
                            <LuLogOut size={25} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end space-x-4 m-3">
              <button
                onClick={prevPage}
                className={`outline outline-bgBtn py-2 w-32 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center  ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className={`outline outline-bgBtn py-2 w-32 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center  ${data.length < 5 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                Next
              </button>
            </div>
          </div>
          <div className="flex justify-end p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AttandanceManager;
