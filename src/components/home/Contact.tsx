'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useTranslations } from 'next-intl'
import { Slide, toast, ToastContainer } from 'react-toastify'
import { useReCaptcha } from 'next-recaptcha-v3'
import Link from 'next/link'
import { DataResponse } from '@/types'

interface form {
    name         : string;
    email        : string;
    message      : string;
    token_verify?: any
}
const URL = process.env.NODE_ENV === 'production' ? 'https://devkeven.com/send-form.php' : 'http://php-scripts.test/send-form.php'
const Contact = () => {

    const t = useTranslations('Components.Home.Contact');
    const { executeRecaptcha } = useReCaptcha();
/**********************************************************************
 * TODO function to send info
 * @param {form} params 
*/
    const sendForm = async (params: form, {resetForm, setSubmitting}: FormikHelpers<any>) => {
        const token               = await executeRecaptcha('yourAction');
              params.token_verify = token
        await axios.post(URL, params)
                    .then((res: AxiosResponse) =>{
                        const dataResponse: DataResponse = res.data;
                        if(res.status === 200){
                            toast.success(t(dataResponse.message), {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Slide,
                            });

                            resetForm();

                        }else{
                            toast.error(t(dataResponse.message), {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Slide,
                            });
                        }

                    }).catch((error: AxiosError) => {
                        console.log(error);
                        const dataResponse = error.response?.data as DataResponse;
                        toast.error(t(dataResponse.message), {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Slide,
                        });
                    }).finally(() => {
                        setSubmitting(false);
                    })
    }

    //Validate form
    const formSchema = Yup.object().shape({
        name: Yup.string()        
            .required(t('yup_name')),
        email: Yup.string()
                .email(t('yup_email'))
                .required(t('yup_email')),
        message: Yup.string()
            .required(t('yup_message')),
    
    });
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            <section id="contact" className='bg-blue-500 text-white'>
                <div className='p-10 md:pt-20'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>{t('title')} </h2>
                        <p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14'>{t('subtitle')} </p>              
                    </div>

                    <div className="mx-0 sm:32 md:32 lg:mx-40 bg-white p-5 rounded-md drop-shadow shadow-xl shadow-gray-600/50">
                        <Formik
                            initialValues={{ 
                                name   : '',
                                email  : '',
                                message: '',
                            }}
                            validationSchema={formSchema}
                            onSubmit={(values, actions) => sendForm(values, actions)}
                        >
                            {({isSubmitting}) => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        {t('name')}
                                    </label>
                                    <Field
                                        className="appearance-none bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder={t('placeholder_name')}
                                    />
                                    <ErrorMessage name="name" component="div" className='text-red-700 font-bold'/>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        {t('email')}
                                    </label>
                                    <Field
                                        className="appearance-none bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder={t('placeholder_email')}
                                    />
                                    <ErrorMessage name="email" component="div" className='text-red-700 font-bold'/>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                        {t('message')}
                                    </label>
                                    <Field
                                        as='textarea'
                                        rows={10}
                                        className="appearance-none bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                                        id="message"
                                        name="message"
                                        type="text"
                                        placeholder={t('placeholder_message')}
                                    />
                                    <ErrorMessage name="message" component="div" className='text-red-600 font-bold text-capitalize'/>

                                </div>

                                {/* Botón de Envío */}
                                <button
                                    className="justify-center inline-flex items-center disabled:cursor-not-allowed disabled:opacity-30 w-full lg:w-auto bg-blue-500 hover:bg-blue-700 hover:-translate-y-1 duration-300 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline uppercase shadow-lg shadow-gray-500/50"
                                    type="submit"
                                    disabled={isSubmitting}                                    
                                ><span>{t('send')} </span>
                                    {
                                        isSubmitting &&
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 ms-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                    }
                                </button>
                            </Form>
                        )}
                        </Formik>
                        {/* footer  */}
                        <div className='mt-10 p-1 leading-[1.2rem] text-[.75rem] rounded bg-slate-200 text-gray-600'>
                            <span>  {t('recaptcha')} </span>
                            <Link href="https://policies.google.com/privacy" className=' capitalize text-blue-600 hover:text-blue-900 visited:text-purple-600 ease-in-out duration-150'>{t('privacy_policy')}</Link> <span> & </span>
                            <Link href="https://policies.google.com/terms" className=' capitalize text-blue-600 hover:text-blue-900 visited:text-purple-600 ease-in-out duration-150'>{t('terms')}</Link> <span> {t('by_google')}</span>
                        </div>
                    </div>
                </div>

            
            </section>
        </>
    )
}

export default Contact