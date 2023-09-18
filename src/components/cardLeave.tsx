import { useState } from 'react';
import Button from './button';
import Popup from './popup';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { validateLeave } from '../auth/yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
interface Target {
  tittle: string;
  subTittle: string;
}
const CardLeave: React.FC<Target> = ({ tittle, subTittle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      information: '',
      start: '',
      end: '',
      file: ''
    },
    validationSchema: validateLeave,
    onSubmit: (values) => {
      const formData = new FormData()
      formData.append("file", values.file)
      formData.append("upload_preset", "yymfqai7")
      axios
        .post(`/login`, {
          information: values.information,
          start: values.start,
          end: values.end,
          file: values.file,
        })
        .then((response) => {
          toast.success(response.data.message);
          Cookies.set('data', JSON.stringify(response.data));
        })
        .catch((error) => {
          toast.error('Mohon coba lagi nanti.');
        });
    },
  });
  return (
    <div className="rounded-cardBase bg-white w-full p-10">
      <div>
        <h1 className="font-bold text-2xl">{tittle}</h1>
        <p className="text-subTitle font-semibold text-lg">{subTittle}</p>
      </div>
      <div className="py-10 flex flex-wrap justify-end">
        <div>
          <Button
            onClick={handleOpen}
            textBtn='Add Request'
            color="bg-bgBtn"
          />
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
                  Request Leave
                </h3>
                <form onSubmit={formik.handleSubmit} className="space-y-4" action="#">
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Information
                    </label>
                    <input
                      type="text"
                      name="information"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`bg-gray-50 ${formik.touched.information && formik.errors.information
                        ? `border-red-800`
                        : ''
                        } border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5`}
                      placeholder="enter your information"
                    />
                    {formik.touched.information && formik.errors.information ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.information}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      leave start date
                    </label>
                    <input
                      type="date"
                      name="date"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`bg-gray-50 ${formik.touched.start && formik.errors.start
                        ? `border-red-800`
                        : ''
                        } border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5`}
                      placeholder="enter your date start"
                    />
                    {formik.touched.start && formik.errors.start ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.start}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      leave end date
                    </label>
                    <input
                      type="date"
                      name="text"
                      className={`bg-gray-50 ${formik.touched.end && formik.errors.end
                        ? `border-red-800`
                        : ''
                        } border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5`}
                      placeholder="enter your date end"
                    />
                    {formik.touched.end && formik.errors.end ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.end}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Supporting Files
                    </label>
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
                      className={`bg-gray-50 ${formik.touched.file && formik.errors.file
                        ? `border-red-800`
                        : ''
                        } border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5`}
                      placeholder="enter your file"
                    />
                    {formik.touched.file && formik.errors.file ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.file}
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
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </Popup>
      ) : null}
    </div>
  );
};

export default CardLeave;
