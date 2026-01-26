'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FiExternalLink } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

import Span from '@/components/_components/Span'
import Carousel from '@/components/_components/Carousel'
import CarouselApp from '@/components/_components/CarouselApp'
import YoutubeComponent from '@/components/_components/YoutubeComponent'

import codalyHero from '@/public/images/codaly/codaly_hero.png'
import codalyHero2 from '@/public/images/codaly/codaly_hero_2.png'
import codalyHero3 from '@/public/images/codaly/codaly_hero_3.png'
import codalyHero4 from '@/public/images/codaly/codaly_hero_4.png'
import codalyHero5 from '@/public/images/codaly/codaly_hero_5.png'

const images = [
  { original: codalyHero.src, thumbnail: codalyHero.src },
  { original: codalyHero2.src, thumbnail: codalyHero2.src },
  { original: codalyHero3.src, thumbnail: codalyHero3.src },
  { original: codalyHero4.src, thumbnail: codalyHero4.src },
  { original: codalyHero5.src, thumbnail: codalyHero5.src },
]

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">{children}</div>
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 md:text-2xl">{children}</h2>
}

export default function Codaly() {
  const t = useTranslations('App.Project.Codaly')

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
              Case study
            </div>

            <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-wide md:text-5xl">Codaly</h1>

            <div className="mx-auto mt-6 space-y-4 text-white/90">
              <Span text={t('text_1')} />
              <Span text={t('text_2')} />
              <Span text={t('text_3')} />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://codaly.com.mx"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-extrabold uppercase text-indigo-700 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95"
              >
                Ver web <FiExternalLink />
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

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <SectionTitle>Codaly web</SectionTitle>
              <div className="mt-5">
                <Carousel images={images} />
                <p className="mt-4 text-sm text-slate-600">{t('link')}</p>
                <Link href="https://codaly.com.mx" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                  https://codaly.com.mx <FiExternalLink />
                </Link>
              </div>
            </Card>

            <Card>
              <SectionTitle>Codaly mobile</SectionTitle>
              <div className="mt-5">
                <CarouselApp />
                <p className="mt-4 text-sm text-slate-600">{t('link')}</p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.codaly&hl=es_EC"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Play Store <FiExternalLink />
                </Link>
              </div>
            </Card>

            <Card>
              <SectionTitle>Video</SectionTitle>
              <div className="mt-5">
                <YoutubeComponent id="DC-deWuLHcE" title="Codaly demo" />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div id="details" className="space-y-6 scroll-mt-24">
            <Card>
              <SectionTitle>Detalles</SectionTitle>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="font-extrabold text-slate-900">{t('name_proyect')}</dt>
                  <dd className="mt-1 text-slate-600">Codaly</dd>
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
                  <dt className="font-extrabold text-slate-900">Roles Mobile App</dt>
                  <dd className="mt-2">
                    <ul className="list-disc space-y-1 pl-5 text-slate-600">
                      <li>{t('ra_1')}</li>
                      <li>{t('ra_2')}</li>
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
              <SectionTitle>Acciones</SectionTitle>
              <div className="mt-5 space-y-3">
                <Link
                  href="https://codaly.com.mx"
                  target="_blank"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold uppercase text-white transition hover:bg-slate-800"
                >
                  Abrir web <FiExternalLink />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.codaly&hl=es_EC"
                  target="_blank"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-100 px-5 py-3 text-sm font-extrabold uppercase text-slate-900 transition hover:bg-slate-200"
                >
                  Abrir Play Store <FiExternalLink />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
