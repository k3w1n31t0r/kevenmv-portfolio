'use client'

import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { LuMousePointerClick } from 'react-icons/lu'
import { motion, type BezierDefinition } from 'framer-motion'

const skills = [
  { skill: 'HTML', tech: 'front' },
  { skill: 'CSS', tech: 'front' },
  { skill: 'Javascript', tech: 'front' },
  { skill: 'PHP', tech: 'backend' },
  { skill: 'Node JS', tech: 'backend' },
  { skill: 'Express JS', tech: 'backend' },
  { skill: 'React', tech: 'framework_front' },
  { skill: 'Bootstrap', tech: 'framework_front' },
  { skill: 'Tailwind css', tech: 'framework_front' },
  { skill: 'React Native', tech: 'framework_back' },
  { skill: 'Laravel', tech: 'framework_back' },
  { skill: 'MySQL', tech: 'sql' },
  { skill: 'PostgresSQL', tech: 'sql' },
  { skill: 'MongoDB', tech: 'nosql' },
  { skill: 'Firebase', tech: 'nosql' },
  { skill: 'Git', tech: 'other' },
  { skill: 'Github', tech: 'other' },
  { skill: 'Linux', tech: 'other' },
  { skill: 'AWS EC2', tech: 'other' },
  { skill: 'AWS Lambda', tech: 'other' },
  { skill: 'AWS RDS', tech: 'other' },
  { skill: 'PlayStore developer', tech: 'other' },
  { skill: 'PayPal payments', tech: 'payments' },
  { skill: 'Stripe payments', tech: 'payments' },
] as const

type SkillTech = (typeof skills)[number]['tech']

const TECH_STYLES: Record<SkillTech, string> = {
  front: 'bg-sky-500/10 text-sky-100 ring-1 ring-sky-300/30',
  backend: 'bg-emerald-500/10 text-emerald-100 ring-1 ring-emerald-300/30',
  sql: 'bg-amber-500/10 text-amber-100 ring-1 ring-amber-300/30',
  nosql: 'bg-amber-500/10 text-amber-100 ring-1 ring-amber-300/30',
  other: 'bg-slate-500/10 text-slate-100 ring-1 ring-slate-300/30',
  framework_front: 'bg-indigo-500/10 text-indigo-100 ring-1 ring-indigo-300/30',
  framework_back: 'bg-fuchsia-500/10 text-fuchsia-100 ring-1 ring-fuchsia-300/30',
  payments: 'bg-lime-500/10 text-lime-100 ring-1 ring-lime-300/30',
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

const badgeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
}

const badgeItem = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: easeOut } },
}

function SkillBadge({ tech, skill }: { tech: SkillTech; skill: string }) {
  return (
    <motion.div
      variants={badgeItem}
      className={[
        'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold',
        'backdrop-blur-md transition-all duration-200',
        'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20',
        TECH_STYLES[tech],
      ].join(' ')}
      title={tech}
    >
      {skill}
    </motion.div>
  )
}

export default function About() {
  const t = useTranslations('Components.Home.About')

  const grouped = useMemo(() => skills, [])

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white"
    >
      {/* blobs decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Heading */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide md:text-4xl">
            {t('title')}{' '}
            <span className="underline decoration-2 underline-offset-4 decoration-white/70">
              {t('subtitle')}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base/7 text-white/90 md:text-xl/8">
            {t('about')}
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            variants={item}
            className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-md md:p-8"
          >
            <h3 className="text-xl font-bold md:text-2xl">{t('know_me')}</h3>

            <div className="mt-6 space-y-5 text-base/7 text-white/90 md:text-lg/7">
              <p>{t('know_me2')}</p>
              <p>{t('know_me3')}</p>
              <p>{t('know_me4')}</p>
            </div>

            <div className="mt-8">
              <Link
                href="#contact"
                className={[
                  'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold uppercase',
                  'bg-white text-blue-700 shadow-lg shadow-black/20',
                  'transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700',
                  'lg:w-auto',
                ].join(' ')}
              >
                <span>{t('contact_me')}</span>
                <LuMousePointerClick />
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={item}
            className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-md md:p-8"
          >
            <h3 className="text-xl font-bold md:text-2xl">{t('my_skills')}</h3>

            <motion.div variants={badgeContainer} className="mt-6 flex flex-wrap gap-2">
              {grouped.map((e, i) => (
                <SkillBadge key={`${e.skill}-${i}`} tech={e.tech} skill={e.skill} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
