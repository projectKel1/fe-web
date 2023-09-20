import Button from './button';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface Data {
  id: number;
  is_checkout: boolean;
}

const CardAttendance = () => {
  const [attendanceId, setAttendanceId] = useState<Data>([]);
  const handleCheckIn = () => {
    const token = Cookies.get('token');
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
      })
      .catch((error) => {
        toast.error('Mohon coba lagi nanti.' + error);
      });
  };

  const handleCheckOut = () => {
    const token = Cookies.get('token');
    axios
      .post(
        `https://node.flattenbot.site/attendances/${attendanceId}`,
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
      })
      .catch((error) => {
        toast.error('Mohon coba lagi nanti.' + error);
      });
  };

  return (
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
            <Button
              onClick={handleCheckOut}
              textBtn="Check Out"
              color="bg-bgBtnRed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAttendance;
