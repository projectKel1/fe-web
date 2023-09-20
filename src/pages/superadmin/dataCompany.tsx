import {
  LuCheckCircle2,
  LuFileEdit,
  LuMinusCircle,
  LuTrash2,
} from "react-icons/lu";
import { useEffect, useState } from "react";

import CardCompany from "../../components/cardCompany";
import Cookies from "js-cookie";
import Popup from "../../components/popup";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { validateCompany } from "../../auth/yup";

interface DataCompany {
  id: number;
  name: string;
  address: string;
  description: string;
  email: string;
  type: string;
  image: string;
  started_hour: string;
  ended_hour: string;
}
const DataCompany = () => {
  const token: any = Cookies.get("token");

  const [company, setCompany] = useState<DataCompany[]>([]);
  const [dataSelected, setDataSelected] = useState<DataCompany>();
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = () => {
    axios
      .get(`/companies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);

        setCompany(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/companies/${dataSelected?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(response.data.message);
        getCompany();
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
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: dataSelected?.name || "",
      address: dataSelected?.address || "",
      description: dataSelected?.description || "",
      email: dataSelected?.email || "",
      type: dataSelected?.type || "",
      started_hour: dataSelected?.started_hour || "",
      ended_hour: dataSelected?.ended_hour || "",
    },
    validationSchema: validateCompany,
    onSubmit: (values) => {
      axios
        .put(
          `/companies/${dataSelected?.id}`,
          {
            name: values.name,
            address: values.address,
            description: values.description,
            email: values.email,
            type: values.type,
            started_hour: values.started_hour,
            ended_hour: values.ended_hour,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success(response.data.message);
          getCompany();
          setOpen(false);
        })
        .catch(() => {
          toast.error("Mohon coba lagi nanti.");
        });
    },
  });

  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2 w-full">
        <CardCompany title="Data Company" subTitle="Check Data Company here" getData={getCompany}/>
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
                  Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {company &&
                company.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-bgCard"
                      } border-b hover:bg-gray-300`}
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4 flex gap-5">
                        <div
                          onClick={() => {
                            handleOpen()
                            setDataSelected(item);
                          }}
                          className="text-green-800 cursor-pointer"
                        >
                          <LuFileEdit size={25} />
                        </div>
                        <div
                          onClick={() => {
                            setIsDelete(true);
                            setDataSelected(item);
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
                      Edit Company {dataSelected?.name}
                    </h3>
                    <form
                      onSubmit={formik.handleSubmit}
                      className="space-y-4"
                      action="#"
                    >
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.address}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Type
                        </label>
                        <input
                          type="text"
                          name="type"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.type}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.type && formik.errors.type ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.type}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.description}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.description}
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
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Started Hour
                        </label>
                        <input
                          type="text"
                          name="started_hour"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.started_hour}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.started_hour && formik.errors.started_hour ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.started_hour}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black">
                          Ended Hour
                        </label>
                        <input
                          type="text"
                          name="ended_hour"
                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                          value={formik.values.ended_hour}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.ended_hour && formik.errors.ended_hour ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.ended_hour}
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
            <Popup onConfirm={() => setIsDelete(false)}>
              <motion.div
                animate={{ y: 10 }}
                className="relative w-full max-w-md max-h-full"
              >
                <div className="relative bg-white rounded-lg shadow">
                  <div className="px-10 py-10 flex flex-col space-y-3 ">
                    <div className="space-y-2 flex flex-col justify-center items-center">
                      <h3 className="text-xl font-bold text-black">
                        Delete Data Company {dataSelected?.name}
                      </h3>
                      <p className="text-red-500 text-md">
                        Are You Sure Delete This Company ?
                      </p>
                    </div>

                    <div className="flex space-x-5 justify-center ">
                      <button
                        type="button"
                        onClick={() => setIsDelete(false)}
                        className="flex justify-center items-center text-white bg-bgBtnRed rounded-cardBase font-semibold text-sm px-5 py-2.5 text-center"
                      >
                        <span className="mr-2">
                          <LuMinusCircle size={25} />
                        </span>
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete()}
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

export default DataCompany;
