'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { FiExternalLink } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

import Span from '@/components/_components/Span'
import Carousel from '@/components/_components/Carousel'
import YoutubeComponent from '@/components/_components/YoutubeComponent'

import codalyHero from '@/public/images/designer/des1.png'
import codalyHero2 from '@/public/images/designer/des2.png'
import codalyHero3 from '@/public/images/designer/des3.png'
import codalyHero4 from '@/public/images/designer/des4.png'

const images = [
  { original: codalyHero.src, thumbnail: codalyHero.src },
  { original: codalyHero2.src, thumbnail: codalyHero2.src },
  { original: codalyHero3.src, thumbnail: codalyHero3.src },
  { original: codalyHero4.src, thumbnail: codalyHero4.src },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 md:text-2xl">
      {children}
    </h2>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {children}
    </div>
  )
}

export default function Designer() {
    const t = useTranslations('App.Project.Designer')
    const locale = useLocale()
    return (
        <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest ring-1 ring-white/20 backdrop-blur">
                        <HiOutlineSparkles />
                        <span>{t('case_study')}</span>
                    </div>

                    <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
                    {t('name')}
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base/7 text-white/90 md:text-lg/8">
                    {t('text_1')}
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="https://codaly.com.mx/designer"
                        target="_blank"
                        className={[
                        'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3',
                        'bg-white text-indigo-700 font-extrabold uppercase shadow-lg shadow-black/20',
                        'transition-all hover:-translate-y-0.5 hover:bg-white/95',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700',
                        ].join(' ')}
                    >
                        <span>{t('show_site')}</span>
                        <FiExternalLink />
                    </Link>

                    <Link
                        href="#videos"
                        className={[
                        'inline-flex items-center justify-center rounded-2xl px-5 py-3',
                        'bg-white/10 text-white font-extrabold uppercase ring-1 ring-white/20 backdrop-blur',
                        'transition hover:bg-white/15',
                        ].join(' ')}
                    >{t('watch_video')}
                    </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {['Next.js', 'Tailwind', 'ZPL/TSPL', 'Label tooling', 'UI/UX'].map((tag) => (
                        <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold ring-1 ring-white/15"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
                <Card>
                <SectionTitle>{ t('summary') }</SectionTitle>
                <div className="mt-5 space-y-4">
                    <Span text={t('text_2')} />
                    <Span text={t('text_3')} />
                </div>
                </Card>

                <Card>
                <SectionTitle>{t('gallery')}</SectionTitle>
                <div className="mt-5">
                    <Carousel images={images} />
                    <p className="mt-4 text-sm text-slate-600">{t('link')}</p>
                    <Link
                    href="https://codaly.com.mx/designer"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                    >
                    https://codaly.com.mx/designer <FiExternalLink />
                    </Link>
                </div>
                </Card>

                <Card>
                <div id="videos" className="scroll-mt-24">
                    <SectionTitle>Videos</SectionTitle>
                    <div className="mt-5 space-y-10">
                    <div>
                        <h3 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 md:text-xl">
                        {t('text_4')}
                        </h3>
                        <div className="mt-4">
                        <YoutubeComponent id="3j6ray10Sq0" title="Imprime tus etiquetas con Codaly" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 md:text-xl">
                        {t('text_4')}
                        </h3>
                        <div className="mt-4">
                        <YoutubeComponent id="OURa_hS7zNQ" title="Imprime tus etiquetas con Codaly" />
                        </div>
                    </div>
                    </div>
                </div>
                </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <Card>
                <SectionTitle>{t('details')}</SectionTitle>

                <dl className="mt-5 space-y-4 text-sm">
                    <div className="rounded-2xl bg-slate-50 p-4">
                    <dt className="font-extrabold text-slate-900">{t('name_proyect')}</dt>
                    <dd className="mt-1 text-slate-600">{t('name')}</dd>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-extrabold text-slate-900">Roles Web</dt>
                        <dd className="mt-2">
                            <ul className="list-disc space-y-1 pl-5 text-slate-600">
                            <li>{t('rw_1')}</li>
                            <li>{t('rw_2')}</li>
                            <li>{t('rw_3')}</li>
                            </ul>
                        </dd>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-extrabold text-slate-900">{t('client_company')}</dt>
                        <dd className="mt-1 text-slate-600">Label Dictate LATAM</dd>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-extrabold text-slate-900">{t('property')}</dt>
                        <dd className="mt-1 text-slate-600">{t('property_disclaimer')}</dd>
                    </div>
                </dl>
                </Card>

                <Card>
                {/* <SectionTitsle>Acciones</SectionTitsle> */}
                <div className="mt-5 space-y-3">
                    <Link
                        href="https://codaly.com.mx/designer"
                        target="_blank"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold uppercase text-white transition hover:bg-slate-800"
                    >{t('show_site')} <FiExternalLink />
                    </Link>

                    <Link
                        href={`/${locale}/#contact`}
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-100 px-5 py-3 text-sm font-extrabold uppercase text-slate-900 transition hover:bg-slate-200"
                    >
                    {t('contact')}
                    </Link>
                </div>
                </Card>
            </div>
            </div>
        </section>
        </main>
    )
}
