import axios from 'axios';
import {
  LuCheckCircle2,
  LuFileEdit,
  LuMinusCircle,
  LuTrash2,
} from 'react-icons/lu';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import Popup from '../../components/popup';
import { useFormik } from 'formik';
import { validateLevel } from '../../auth/yup';
import toast from 'react-hot-toast';
import CardLevel from '../../components/cardLevel';
import { motion } from 'framer-motion';
interface DataLevel {
  id: number;
  level: string;
}

const EmployeeLevel = () => {
  const [level, setLevel] = useState<DataLevel[]>([]);
  const [open, setOpen] = useState(false);
  const [dataid, setDataid] = useState<DataLevel>();
  const [isDelete, setIsDelete] = useState(false);
  const handleOpenDelete = () => {
    setIsDelete(true);
  };
  const handleDeleteClose = () => {
    setIsDelete(false);
  };
  const getLevel = () => {
    const tempData: any = Cookies.get('data');
    const data = JSON.parse(tempData);
    const token = data.data.token;
    axios
      .get(`/employee-levels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLevel(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      level: '',
    },
    validationSchema: validateLevel,
    onSubmit: (values) => {
      const tempData: any = Cookies.get('data');
      const data = JSON.parse(tempData);
      const token = data.data.token;
      axios
        .put(
          `/employee-levels/${dataid?.id}`,
          {
            level: values.level,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success(response.data.message);
          getLevel();
          setOpen(false);
        })
        .catch(() => {
          toast.error('Mohon coba lagi nanti.');
        });
    },
  });
  const handleDel = () => {
    const tempData: any = Cookies.get('data');
    const data = JSON.parse(tempData);
    const token = data.data.token;
    axios
      .delete(`/employee-levels/${dataid?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(response.data.message);
        getLevel();
        setIsDelete(false);
      })
      .catch((error) => {
        toast.error(error.data.data.message);
      });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getLevel();
  }, [level]);
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2 w-full">
        <CardLevel title="Data Level" subTitle="Check Data Level here" />
      </div>
      <div className="py-2 w-full bg-white rounded-cardBase">
        <div className="p-2 relative overflow-x-auto">
          <table className="w-full text-sm text-left  font-semibold">
            <thead className="text-md uppercase border-b-2">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Level Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {level &&
                level.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b hover:bg-gray-300"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{item.level}</td>
                      <td className="px-6 py-4 flex gap-5">
                        <div
                          onClick={() => {
                            handleOpen(), setDataid(item);
                          }}
                          className="text-green-800 cursor-pointer"
                        >
                          <LuFileEdit size={25} />
                        </div>
                        <div
                          onClick={() => {
                            handleOpenDelete(), setDataid(item);
                          }}
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
          {open && (
            <Popup onConfirm={handleClose}>
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-bold text-black">
                      Edit Level {dataid?.level}
                    </h3>
                    <form
                      onSubmit={formik.handleSubmit}
                      className="space-y-4"
                      action="#"
                    >
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Level
                        </label>
                        <input
                          type="text"
                          name="level"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.level}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.level && formik.errors.level ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.level}
                          </div>
                        ) : null}
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
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Popup>
          )}
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
                        Delete Data {dataid?.level}
                      </h3>
                      <p className="text-red-500 text-md">
                        Are You Sure Delete This Level ?
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
                        type="button"
                        onClick={() => handleDel()}
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
      </div>
    </div>
  );
};

export default EmployeeLevel;
