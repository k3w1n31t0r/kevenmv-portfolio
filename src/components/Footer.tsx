'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { PiReadCvLogoDuotone } from 'react-icons/pi'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://mx.linkedin.com/in/keven-maria-valenzuela-3910001a3',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/k3w1n31t0r',
    icon: FaGithub,
  },
  {
    label: 'CV',
    href: 'https://devkeven.com/cv',
    icon: PiReadCvLogoDuotone,
  },
] as const

export default function Footer() {
  const t = useTranslations('Components.Footer')

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Decoración sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* Brand / Description */}
          <div className="space-y-4">
            <p className="text-sm font-extrabold uppercase tracking-widest text-white/90">
              Keven Maria
            </p>

            <p className="max-w-xl text-sm/6 text-white/75 md:text-base/7">
              {t('portfolio')}
            </p>
          </div>

          {/* Social */}
          <div className="md:justify-self-end">
            <p className="text-sm font-extrabold uppercase tracking-widest text-white/90">
              Social
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className={[
                      'inline-flex items-center justify-center rounded-2xl',
                      'border border-white/10 bg-white/5 p-3',
                      'text-white/85 backdrop-blur',
                      'transition-all duration-200',
                      'hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-black/30',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                    ].join(' ')}
                  >
                    <Icon size={22} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/65">
            {t('developed_by')}{' '}
            <Link
              href="#"
              className="font-semibold text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              Keven María
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
