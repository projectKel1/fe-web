import { useFormik } from 'formik';
import { LoginAuth } from '../../auth/yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { LuEye, LuEyeOff, LuLoader } from 'react-icons/lu';
import Button from '../../components/button';

const Login = () => {
  const [status, setStatus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginAuth,
    onSubmit: (values) => {
      setStatus(true);
      axios
        .post(`/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          toast.success(response.data.message);
          Cookies.set('data', JSON.stringify(response.data));
          if (response.data.data.role_id === 1) {
            navigate('/dashboard-manager');
          }
          if (response.data.data.role_id == 2) {
            navigate('/dashboard-hr');
          }
          setStatus(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 500) {
            toast.error('Email atau password salah');
            setStatus(false);
          } else {
            toast.error('Server tidak merespon. Mohon coba lagi nanti.');
            setStatus(false);
          }
        });
    },
  });

  useEffect(() => {
    if (Cookies.get('data')) {
      const tempData: any = Cookies.get('data');
      const Data = JSON.parse(tempData);
      if (Data.data.role_id === 1) {
        navigate('/dashboard-manager');
      }
    }
  }, []);

  return (
    <section>
      <div className="grid grid-cols-2  px-6 py-8 mx-auto h-screen md:h-screen bg-bgMain">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Hi, Welcome Back</h1>
          <img
            src="https://minimals.cc/assets/illustrations/illustration_dashboard.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center  ">
          <div className="p-6 space-y-4 w-96 md:space-y-6 sm:p-8">
            <div className="space-y-3">
              <h1 className="text-2xl  font-semibold leading-tight tracking-tight md:text-2xl">
                Sign in to HRIS App
              </h1>
            </div>
            <form
              className="space-y-4 md:space-y-8"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label className=" mb-2 text-sm font-semibold ">Email</label>
                <input
                  type="text"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  autoComplete="off"
                  className={`bg-gray-50 border ${
                    formik.touched.email && formik.errors.email
                      ? `border-red-800`
                      : 'border-gray-300 border-2'
                  } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  placeholder="email@email.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="mb-2 text-sm font-semibold ">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={`bg-gray-50 border relative ${
                      formik.touched.email && formik.errors.email
                        ? `border-red-800`
                        : 'border-gray-300 border-2'
                    } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className=" absolute right-4 top-2/4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <LuEye /> : <LuEyeOff />}
                  </button>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-800 absolute text-sm font-semibold">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="">
                <Button
                  textBtn={status ? <LuLoader /> : 'Login'}
                  onClick={null}
                  color="bg-bgBtn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
