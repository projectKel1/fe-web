import axios from "axios"
import CardReimbursement from "../../components/cardReimbursement"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { LuCheckCircle2, LuFileEdit, LuMinusCircle, LuTrash2 } from "react-icons/lu"
import Popup from "../../components/popup"
import { useFormik } from "formik"
import { validateEditReimbursement } from "../../auth/yup"
import toast from "react-hot-toast"
import { motion } from 'framer-motion'
interface Data {
  id: number,
  name: string,
  description: string,
  type: string,
  updated_at: Date,
  status: string,
  nominal: number,
  url_proof: string
}

const ReimbursementManager = () => {
  const [data, setData] = useState<Data[]>([])
  const [open, setOpen] = useState(false);
  const [dataid, setDataid] = useState<Data>();
  const [isDelete, setIsDelete] = useState(false);
  const token = Cookies.get('token')
  const getData = async () => {
    try {
      const response = await axios.get(`https://node.flattenbot.site/managers/request-reimbursement`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setData(response.data.data)
    } catch (error: any) {
      console.log(error)
    }
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      description: dataid?.description || '',
      type: dataid?.type || 'travel',
      nominal: dataid?.nominal || '',
      url_proof: dataid?.url_proof || '',
    },
    validationSchema: validateEditReimbursement,
    onSubmit: (values) => {
      axios
        .put(`https://node.flattenbot.site/request-reimbursement/${dataid?.id}`, {
          description: values.description,
          type: values.type,
          nominal: values.nominal,
          url_proof: values.url_proof,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          toast.success(response.data.message);
          getData()
          setOpen(false)
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
  });
  const handleDel = async () => {
    try {
      const response = await axios.delete(`https://node.flattenbot.site/request-reimbursement/${dataid?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      getData()
      toast.success(response.data.message)
      console.log(response.data)
      setIsDelete(false)
    } catch (error) {
      console.log(error)
      setIsDelete(false)
    }
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenDelete = () => {
    setIsDelete(true);
  };
  const handleDeleteClose = () => {
    setIsDelete(false);
  };
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2">
        <CardReimbursement tittle="Reimbursement Manager" subTittle="Check Reimbursement here" />
      </div>
      <div className="py-2 w-full bg-white rounded-cardBase">
        <div className="p-5">
          <h1 className="font-semibold underline-offset-8 underline">
            History Reimbursement
          </h1>
        </div>
        <div className="p-2">
          <table className="w-full text-sm text-left  font-semibold">
            <thead className="text-md uppercase border-b-2">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  information
                </th>
                <th scope="col" className="px-6 py-3">
                  Type Reimbursement
                </th>
                <th scope="col" className="px-6 py-3">
                  Nominal Reimbursement
                </th>
                <th scope="col" className="px-6 py-3">
                  Request Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data && (
                  data.map((element, index) => {
                    const formattedDate = new Date(element.updated_at);
                    const formattedDateString = `${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`;
                    return (
                      <tr key={index} className="bg-white border-b hover:bg-gray-300">
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4">{element.description}</td>
                        <td className="px-6 py-4">{element.type}</td>
                        <td className="px-6 py-4">{element.nominal}</td>
                        <td className="px-6 py-4">{formattedDateString}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex font-semibold items-center bg-red-100 text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded-full">
                            <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                            {element.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex gap-5">
                          <div
                            onClick={() => {
                              handleOpen(), setDataid(element);
                            }}
                            className="text-green-800 cursor-pointer"
                          >
                            <LuFileEdit size={25} />
                          </div>
                          <div
                            onClick={() => {
                              handleOpenDelete(), setDataid(element);
                            }}
                            className="text-red-800 cursor-pointer"
                          >
                            <LuTrash2 size={25} />
                          </div>
                        </td>
                      </tr>
                    )
                  })
                )
              }
            </tbody>

          </table>
          {
            open && (
              <Popup onConfirm={handleClose}>
                <div className="relative w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-bold text-black">
                        Edit Reimbursement
                      </h3>
                      <form onSubmit={formik.handleSubmit} className="space-y-4" action="#">
                        <div>
                          <label className="block text-sm font-medium text-black">
                            Information
                          </label>
                          <input
                            type="text"
                            name="description"
                            className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                          />
                          {formik.touched.description && formik.errors.description ? (
                            <div className="text-red-600 text-sm">{formik.errors.description}</div>
                          ) : null}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black">
                            Nominal
                          </label>
                          <input
                            type="text"
                            name="nominal"
                            className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                            value={formik.values.nominal}
                            onChange={formik.handleChange}
                          />
                          {formik.touched.nominal && formik.errors.nominal ? (
                            <div className="text-red-600 text-sm">{formik.errors.nominal}</div>
                          ) : null}
                        </div>
                        <div>
                          <label className="block py-1 text-sm font-medium text-black">
                            Type Reimbursement
                          </label>
                          <select onChange={formik.handleChange} value={formik.values.type} className=' text-sm px-3 py-2 w-full border font-medium text-black' name="type" id="">
                            <option value="travel">Travel</option>
                            <option value="business">Business</option>
                            <option value="healthcare">Healtcare</option>
                            <option value="tax">Tax</option>
                            <option value="others">Others</option>
                          </select>
                          {formik.touched.type && formik.errors.type ? (
                            <div className="text-red-600 text-sm">{formik.errors.type}</div>
                          ) : null}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black">
                            File
                          </label>
                          <input
                            type="text"
                            name="url_proof"
                            className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                            value={formik.values.url_proof}
                            onChange={formik.handleChange}
                          />
                          {formik.touched.url_proof && formik.errors.url_proof ? (
                            <div className="text-red-600 text-sm">{formik.errors.url_proof}</div>
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
            )
          }
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
                        Delete Reimbersment
                      </h3>
                      <p className="text-red-500 text-md">
                        Are You Sure Delete This Reimbersment ?
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
                        type="submit"
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
  )
}

export default ReimbursementManager