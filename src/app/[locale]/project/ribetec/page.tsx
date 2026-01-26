'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FiExternalLink } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

import Span from '@/components/_components/Span'
import Carousel from '@/components/_components/Carousel'

import ribetecHero from '@/public/images/ribetec/1.png'
import ribetecHero2 from '@/public/images/ribetec/2.png'
import ribetecHero3 from '@/public/images/ribetec/3.png'
import ribetecHero4 from '@/public/images/ribetec/4.png'
import ribetecHero5 from '@/public/images/ribetec/5.png'

const images = [
  { original: ribetecHero.src, thumbnail: ribetecHero.src },
  { original: ribetecHero2.src, thumbnail: ribetecHero2.src },
  { original: ribetecHero3.src, thumbnail: ribetecHero3.src },
  { original: ribetecHero4.src, thumbnail: ribetecHero4.src },
  { original: ribetecHero5.src, thumbnail: ribetecHero5.src },
]

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">{children}</div>
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 md:text-2xl">{children}</h2>
}

export default function Ribetec() {
  const t = useTranslations('App.Project.Ribetec')

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest ring-1 ring-white/20 backdrop-blur">
              <HiOutlineSparkles />
              Case study
            </div>

            <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              Soporte Ribetec
            </h1>

            <div className="mx-auto mt-6 space-y-4 text-white/90">
              <Span text={t('text_1')} />
              <Span text={t('text_2')} />
              <Span text={t('text_3')} />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://soporte.ribetec.com"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-extrabold uppercase text-indigo-700 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95"
              >
                Abrir soporte <FiExternalLink />
              </Link>
              <Link
                href="#details"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-extrabold uppercase ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <SectionTitle>Galería</SectionTitle>
              <div className="mt-5">
                <Carousel images={images} />
                <p className="mt-4 text-sm text-slate-600">{t('link')}</p>

                <div className="mt-2 flex flex-col gap-1">
                  <Link href="https://soporte.ribetec.com" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                    https://soporte.ribetec.com <FiExternalLink />
                  </Link>
                  <Link href="https://ayuda.ribetec.com" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                    https://ayuda.ribetec.com <FiExternalLink />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <div id="details" className="space-y-6 scroll-mt-24">
            <Card>
              <SectionTitle>Detalles</SectionTitle>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="font-extrabold text-slate-900">{t('name_proyect')}</dt>
                  <dd className="mt-1 text-slate-600">Soporte Ribetec</dd>
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
          </div>
        </div>
      </section>
    </main>
  )
}
