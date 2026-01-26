'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { BezierDefinition, motion } from 'framer-motion'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { FiChevronDown } from 'react-icons/fi'
import avatar from '@/public/images/avatar.png'
import ScrollLink from '../_components/ScrollLink'

const easeOut: BezierDefinition   = [0.16, 1, 0.3, 1]

export default function Home() {
  const t = useTranslations('Components.Home.Home')

  return (
    <motion.main
      id="home"
      initial="hidden"
      animate="show"
      className={[
        'relative overflow-hidden',
        'h-[calc(100dvh-var(--nav-h))]',
        'bg-gradient-to-br from-slate-50 via-white to-slate-100',
      ].join(' ')}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <section className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        {/* Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
          }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur"
        >
          <HiOutlineSparkles />
          Portfolio
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.05 } },
          }}
          className="mt-6 text-center text-3xl font-extrabold uppercase tracking-wide text-slate-900 md:text-5xl"
        >
          {t('title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.12 } },
          }}
          className="mx-auto mt-5 max-w-3xl text-pretty text-center text-base/7 text-slate-600 md:text-xl/8"
        >
          {t('subtitle')}
        </motion.h2>

        {/* CTAs */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut, delay: 0.2 } },
          }}
          className="mx-auto mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <ScrollLink
            targetId="projects"
            href="#projects"
            className={[
              'inline-flex items-center justify-center rounded-2xl px-6 py-3',
              'bg-slate-900 text-sm font-extrabold uppercase text-white',
              'shadow-lg shadow-slate-900/20 transition-all',
              'hover:-translate-y-0.5 hover:bg-slate-800',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
            ].join(' ')}
          >
            Ver proyectos
          </ScrollLink>

          <ScrollLink
            targetId="contact"
            href="#contact"
            className={[
              'inline-flex items-center justify-center rounded-2xl px-6 py-3',
              'bg-white text-sm font-extrabold uppercase text-slate-900',
              'border border-slate-200 shadow-sm transition',
              'hover:bg-slate-50',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
            ].join(' ')}
          >
            Contacto
          </ScrollLink>
        </motion.div>

        {/* Avatar */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.98 },
            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeOut, delay: 0.28 } },
          }}
          className="mt-10"
        >
          <div className="relative mx-auto w-fit">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-purple-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 p-3 shadow-xl shadow-slate-200/60 backdrop-blur">
              <Image
                src={avatar}
                alt="Avatar"
                priority
                className="h-auto w-52 rounded-2xl object-cover sm:w-64 lg:w-80"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 h-px max-w-3xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <ScrollLink
            targetId="about"
            href="#about"
            className={[
              'group inline-flex flex-col items-center gap-1',
              'text-xs font-extrabold uppercase tracking-widest text-slate-500',
              'transition hover:text-slate-700',
            ].join(' ')}
          >
            <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 shadow-sm backdrop-blur"
            >
              <FiChevronDown className="text-slate-700 transition group-hover:text-slate-900" />
            </motion.span>
          </ScrollLink>
        </motion.div>
      </section>
    </motion.main>
  )
}
