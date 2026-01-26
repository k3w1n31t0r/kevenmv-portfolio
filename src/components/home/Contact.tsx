'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useReCaptcha } from 'next-recaptcha-v3'
import axios, { AxiosError } from 'axios'
import { Slide, toast, ToastContainer } from 'react-toastify'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { DataResponse } from '@/types'
import { URL } from '@/utilities/constants'

import { motion, type BezierDefinition } from 'framer-motion'

type ContactForm = {
  name: string
  email: string
  message: string
}

const easeOut: BezierDefinition = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

function SpinnerModal({ open, text, text2 }: { open: boolean; text: string; text2: string }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative mx-6 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <svg
            aria-hidden="true"
            role="status"
            className="h-5 w-5 animate-spin text-slate-900"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>

          <div>
            <p className="text-base font-extrabold text-slate-900">{text}</p>
            <p className="mt-1 text-sm text-slate-600">{text2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const t = useTranslations('Components.Home.Contact')
  const { executeRecaptcha } = useReCaptcha()

  const notify = (type: 'success' | 'error', messageKey: string) => {
    toast[type](t(messageKey), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      transition: Slide,
    })
  }

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t('yup_name')),
        email: z.string().email(t('yup_email')).min(1, t('yup_email')),
        message: z.string().min(1, t('yup_message')),
      }),
    [t]
  )

  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onTouched',
  })

  const sendMutation = useMutation({
    mutationKey: ['contact-send'],
    mutationFn: async (values: ContactForm) => {
      const token = await executeRecaptcha('contact_form_submit')
      const res = await axios.post(URL, { ...values, token_verify: token })
      return res.data as DataResponse
    },
    onSuccess: (data) => {
      notify('success', data.message)
      reset()
    },
    onError: (err) => {
      const error = err as AxiosError
      const dataResponse = error.response?.data as DataResponse | undefined
      notify('error', dataResponse?.message ?? 'unknown_error')
      console.log(error)
    },
  })

  const onSubmit = async (values: FormValues) => {
    await sendMutation.mutateAsync(values)
  }

  const isLoading = sendMutation.isPending || isSubmitting

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <SpinnerModal open={isLoading} text={t('modal_send')} text2={t('modal_wait')} />

      <motion.section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
          <motion.div variants={item} className="text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide md:text-4xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base/7 text-white/90 md:text-xl/8">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white/95 p-6 shadow-2xl shadow-black/20 ring-1 ring-white/20 backdrop-blur md:p-8"
          >
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              variants={container}
              initial={false}
              animate="show"
            >
              <motion.div variants={item}>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="name">
                  {t('name')}
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register('name')}
                  className={[
                    'w-full rounded-2xl border bg-white px-4 py-3 text-slate-900',
                    'border-slate-200 outline-none transition',
                    'focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60',
                  ].join(' ')}
                  placeholder={t('placeholder_name')}
                />
                {errors.name?.message && (
                  <div className="mt-2 text-sm font-semibold text-red-600">{errors.name.message}</div>
                )}
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="email">
                  {t('email')}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  className={[
                    'w-full rounded-2xl border bg-white px-4 py-3 text-slate-900',
                    'border-slate-200 outline-none transition',
                    'focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60',
                  ].join(' ')}
                  placeholder={t('placeholder_email')}
                />
                {errors.email?.message && (
                  <div className="mt-2 text-sm font-semibold text-red-600">{errors.email.message}</div>
                )}
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="message">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  rows={8}
                  {...register('message')}
                  className={[
                    'w-full rounded-2xl border bg-white px-4 py-3 text-slate-900',
                    'border-slate-200 outline-none transition',
                    'focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60',
                    'resize-y',
                  ].join(' ')}
                  placeholder={t('placeholder_message')}
                />
                {errors.message?.message && (
                  <div className="mt-2 text-sm font-semibold text-red-600">{errors.message.message}</div>
                )}
              </motion.div>

              <motion.button
                variants={item}
                type="submit"
                disabled={isLoading}
                className={[
                  'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-extrabold uppercase',
                  'bg-slate-900 text-white shadow-lg shadow-slate-900/20',
                  'transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800',
                  'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
                ].join(' ')}
              >
                {t('send')}
              </motion.button>

              <motion.div variants={item} className="rounded-2xl bg-slate-50 p-3 text-xs leading-5 text-slate-600">
                <span>{t('recaptcha')} </span>
                <Link href="https://policies.google.com/privacy" className="capitalize text-blue-700 hover:text-blue-900">
                  {t('privacy_policy')}
                </Link>
                <span> & </span>
                <Link href="https://policies.google.com/terms" className="capitalize text-blue-700 hover:text-blue-900">
                  {t('terms')}
                </Link>
                <span> {t('by_google')}</span>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
