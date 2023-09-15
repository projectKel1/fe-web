import * as yup from 'yup'

export const LoginAuth = yup.object({
    email: yup.string().required(`Email is required`)
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Emails must contain symbols @'),
    password: yup.string().required('Password is required')
        // .min(8, 'The password must consist of a minimum of 8 characters')
})
