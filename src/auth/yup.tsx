import * as yup from 'yup'

export const LoginAuth = yup.object({
    email: yup.string().required(`Email is required`)
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Emails must contain symbols @'),
    password: yup.string().required('Password is required')
    // .min(8, 'The password must consist of a minimum of 8 characters')
})

export const validateLeave = yup.object({
    information: yup.string().required(`Information is required`),
    file: yup.mixed()
    .required("Required")
    .test("FILE_SIZE", "Too big", (value) => value && value.size <= 512000)
    .test("FILE_TYPE", "file must .jpg/png", (value) => value && ['image/png', 'image/jpg'].includes(value.type)),
    start: yup.mixed()
    .required("Required"),
    end: yup.mixed()
    .required("Required")
})

export const validateTargetEmployee = yup.object({
    name: yup.string().required(`Name is required`),
    product: yup.string().required(`Product is required`),
    qty: yup.string().required(`Qty is required`),
    date: yup.mixed().required(`Qty is required`)
})

export const validateReimbursement = yup.object({
    information: yup.string().required(`information is required`),
    type: yup.string().required(`type is required`),
})
export const validateRole = yup.object({
    role_name: yup.string().required(`Role is required`),
})