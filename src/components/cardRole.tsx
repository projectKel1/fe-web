import { useFormik } from 'formik';
import Button from './button';
import Popup from './popup';
import { useState } from 'react';
import { validateRole } from '../auth/yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
interface CardRole {
  title: string;
  subTitle: string;
}
const CardRole: React.FC<CardRole> = ({ title, subTitle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      role_name: '',
    },
    validationSchema: validateRole,
    onSubmit: (values) => {
      const token = Cookies.get('token');
      axios
        .post(
          `/roles`,
          {
            role_name: values.role_name,
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
          <Button onClick={handleOpen} textBtn="Add Role" color="bg-bgBtn" />
        </div>
      </div>
      {open && (
        <Popup onConfirm={handleClose}>
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Add New Role
                </h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-4"
                  action="#"
                >
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role_name"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                      value={formik.values.role_name}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.role_name && formik.errors.role_name ? (
                      <div className="text-red-600 text-sm">
                        {formik.errors.role_name}
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

export default CardRole;
