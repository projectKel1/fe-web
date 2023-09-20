import Button from "./button";
import Cookies from "js-cookie";
import Popup from "./popup";
import axios from "axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useState } from "react";
import { validateCompany } from "../auth/yup";

interface CardCompany {
  title: string;
  subTitle: string;
  getData: any;
}
const CardCompany: React.FC<CardCompany> = ({ title, subTitle, getData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      address: "",
      description: "",
      email: "",
      type: "",
      started_hour: "",
      ended_hour: "",
    },
    validationSchema: validateCompany,
    onSubmit: (values) => {
      const token: any = Cookies.get("token");
      axios
        .post(
          `/companies`,
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
          setOpen(false);
          getData()
        })
        .catch((error) => {
          toast.error("Mohon coba lagi nanti.");
          setOpen(false);
        });
    },
  });
  return (
    <div className="rounded-cardBase bg-white w-full p-10">
      <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-subTitle font-semibold text-lg">{subTitle}</p>
      </div>
      <div className="py-10 flex flex-wrap justify-end">
        <div>
          <Button onClick={handleOpen} textBtn="Add Company" color="bg-bgBtn" />
        </div>
      </div>
      {open && (
        <Popup onConfirm={handleClose}>
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Add Company
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
                    {formik.touched.description && formik.errors.description ? (
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
                    {formik.touched.started_hour &&
                    formik.errors.started_hour ? (
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
    </div>
  );
};

export default CardCompany;
