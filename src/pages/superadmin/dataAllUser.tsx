import { LuFileEdit, LuTrash2 } from 'react-icons/lu';
import Button from '../../components/button';
import { useState, useEffect } from 'react';
import Popup from '../../components/popup';
import { motion } from 'framer-motion';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import { validateCreateUser } from '../../auth/yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
interface Data {
  fullname: string;
  email: string;
  status: string;
  role_name: string;
  level_name: string;
  id: number;
}
interface DataForm {
  id: number;
  role_name: string;
  level: string;
  name: string;
}

const DataAllUser = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState<DataForm[]>([]);
  const [level, setLevel] = useState<DataForm[]>([]);
  const [company, setCompany] = useState<DataForm[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const token = Cookies.get('token');
  const role_name = Cookies.get('role');
  const getData = async (page: number) => {
    console.log(page, 'halaman');
    try {
      const response = await axios.get(`/users?page=${page}&size=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRole = () => {
    axios
      .get(`/roles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRole(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getLevel = () => {
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
  const getCompany = () => {
    axios
      .get(`/companies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCompany(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      role_id: 1,
      level_id: 1,
      company_id: 1,
      manager_id: 1,
    },
    validationSchema: validateCreateUser,
    onSubmit: (values) => {
      axios
        .post(
          `/users`,
          {
            fullname: values.fullname,
            email: values.email,
            password: values.password,
            role_id: values.role_id,
            level_id: values.level_id,
            company_id: values.company_id,
            manager_id: values.manager_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success(response.data.message);
          setOpen(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
  });
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    getLevel();
    getRole();
    getCompany();
    getData(currentPage);
    if (role_name === 'non-hr') {
      navigate('/dashboard');
    }
  }, [currentPage]);

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
                <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-4 flex flex-col justify-center"
                >
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <div className="text-red-600 text-sm font-semibold">
                        {formik.errors.fullname}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-600 text-sm font-semibold">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-600 text-sm font-semibold">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Role
                    </label>
                    <select
                      name="role_id"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    >
                      {role
                        ? role.map((element, index) => {
                            return (
                              <option key={index} value={element.id}>
                                {element.role_name.toLocaleUpperCase()}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Level
                    </label>
                    <select
                      name="level_id"
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    >
                      {level
                        ? level.map((element, index) => {
                            return (
                              <option key={index} value={element.id}>
                                {element.level.toLocaleUpperCase()}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Level
                    </label>
                    <select
                      name="manager_id"
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    >
                      <option value={1}>Manager</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Company
                    </label>
                    <select
                      name="company"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    >
                      {company
                        ? company.map((element, index) => {
                            return (
                              <option key={index} value={element.id}>
                                {element.name.toLocaleUpperCase()}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                  <div>
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
            {data.map((item: any, index: any) => {
              const bgColor =
                index % 2 === 0
                  ? 'bg-white hover:bg-gray-300 '
                  : 'bg-bgCard hover:bg-green-200';
              const rowNumber = (currentPage - 1) * 5 + index + 1;
              return (
                <tr key={index} className={`${bgColor}`}>
                  <td scope="row" className="px-6 py-4">
                    {rowNumber}
                  </td>
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    {item.fullname}
                  </td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">{item.role_name.toUpperCase()}</td>
                  <td className="px-6 py-4">{item.level_name.toUpperCase()}</td>
                  <td className="px-6 py-4 flex gap-5">
                    <div className="text-green-800 cursor-pointer">
                      <LuFileEdit size={25} />
                    </div>
                    <div className="text-red-800 cursor-pointer">
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
        <button
          className={`outline outline-bgBtn px-5 py-2 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center w-28 ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
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
