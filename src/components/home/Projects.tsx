'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'
import { projects } from '@/utilities/constants'
import { motion, type BezierDefinition } from 'framer-motion'

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

function Subtitle({ text }: { text: string }) {
  const parts = text.split('|')
  return (
    <div className="space-y-3 text-sm/6 text-slate-600 md:text-base/7">
      {parts.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default function Projects() {
  const t = useTranslations('Components.Home.Projects')

  return (
    <motion.section
      id="projects"
      className="bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Header */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide md:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base/7 text-slate-600 md:text-xl/8">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={item}
              className={[
                'group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm',
                'transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60',
              ].join(' ')}
            >
              {/* Media */}
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <Image
                    src={p.image}
                    alt={t(p.title)}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <Image
                    src={p.image2}
                    alt={t(p.title)}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                  {t(p.title)}
                </h3>

                <div className="mt-3">
                  <Subtitle text={t(p.text)} />
                </div>

                <div className="mt-6">
                  <Link
                    href={`project/${p.url}`}
                    className={[
                      'inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-bold uppercase',
                      'bg-slate-900 text-white shadow-sm transition-all duration-200',
                      'hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
                      'md:w-auto',
                    ].join(' ')}
                  >
                    {t('view_more')}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
