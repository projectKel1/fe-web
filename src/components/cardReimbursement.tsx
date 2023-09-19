import { useState } from 'react'
import Button from './button'
import Popup from './popup'
import { useFormik } from 'formik'
import { validateReimbursement } from '../auth/yup'
import axios from 'axios'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'
interface Reimbursement {
    tittle: string
    subTittle: string
}
const CardReimbursement: React.FC<Reimbursement> = ({ tittle, subTittle }) => {
    const [open, setOpen] = useState(false)
    const token = Cookies.get('token')
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const formik = useFormik({
        initialValues: {
            information: '',
            type: 'travel',
            nominal: '',
            url_proof: ''
        },
        validationSchema: validateReimbursement,
        onSubmit: (values) => {
            console.log(values.type)
            axios
                .post(`https://node.flattenbot.site/request-reimbursement`, {
                    description: values.information,
                    type: values.type,
                    nominal: values.nominal,
                    url_proof: values.url_proof
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((response) => {
                    toast.success(response.data.message);
                    console.log(response)
                    setOpen(false)
                })
                .catch((error) => {
                    console.log(error.response.data)
                    toast.error("Ada Masalah Silahkan Coba Lagi")
                });
        },
    });
    return (
        <div className="rounded-cardBase bg-white w-full p-10">
            <div>
                <h1 className="font-bold text-2xl">
                    {tittle}
                </h1>
                <p className="text-subTitle font-semibold text-lg">
                    {subTittle}
                </p>
            </div>
            <div className="py-10 flex flex-wrap justify-end">
                <div>
                    <Button onClick={handleOpen} textBtn="Add Request" color="bg-bgBtn" />
                </div>
            </div>
            {
                open ? (
                    <Popup onConfirm={handleClose}>
                        <div className="relative w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow">
                                <div className="px-6 py-6 lg:px-8">
                                    <h3 className="mb-4 text-xl font-bold text-black">
                                        Request Reimbursement
                                    </h3>
                                    <form onSubmit={formik.handleSubmit} className="space-y-4" action="#">
                                        <div>
                                            <label className="block py-1 text-sm font-medium text-black">
                                                Information
                                            </label>
                                            <input
                                                type="text"
                                                name="information"
                                                onChange={formik.handleChange}
                                                className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                                            />
                                        </div>
                                        <div>
                                            <label className="block py-1 text-sm font-medium text-black">
                                                Nominal
                                            </label>
                                            <input
                                                type="text"
                                                name="nominal"
                                                onChange={formik.handleChange}
                                                className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                                            />
                                        </div>
                                        <div>
                                            <label className="block py-1 text-sm font-medium text-black">
                                                File
                                            </label>
                                            <input
                                                type="text"
                                                name="url_proof"
                                                onChange={formik.handleChange}
                                                className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                                            />
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
                        </div>
                    </Popup>
                ) : null
            }
        </div>
    )
}

export default CardReimbursement