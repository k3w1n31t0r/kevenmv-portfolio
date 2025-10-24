'use client'
import Link from 'next/link';
import React from 'react'
import Span from '../../../../components/_components/Span';
import { useTranslations } from 'next-intl';
import portalHero from '@/public/images/portal/1.png'
import portalHero2 from '@/public/images/portal/2.png'
import portalHero3 from '@/public/images/portal/3.png'
import Carousel from '@/components/_components/Carousel';

const images = [
    {
      original: portalHero.src,
      thumbnail: portalHero.src,
    },
    {
      original: portalHero2.src,
      thumbnail: portalHero2.src,
    },
    {
      original: portalHero3.src,
      thumbnail: portalHero3.src,
    },
]
const Portal = () => {
    
    const t = useTranslations('App.Project.Portal'); // Especifica el namespace "Portal"

    return (
        <main className='overflow-hidden relative'>
            <div className='project-cs-hero h-full md:px-10'>
                <div 
                    className='mx-5 lg:mx-32'
                    id='sections' 
                >
                    {/* main text  */}
                    <section id='project-intro'>
                        <div className='flex flex-col'>
                            <h1 className='text-blue-500 text-4xl lg:text-6xl text-center font-bold uppercase my-10'>Portal </h1>                                                                
                            <Span text={t('text_1')} />
                            <Span text={t('text_2')} />
                            <Span text={t('text_3')} />
                        </div>
                    </section>

                    {/* carousels  */}
                    <section id="project-properties" className='mt-5 lg:mt-14'>

                        {/* carousell web  */}
                        <div className='mb-3'>
                            <Carousel images={images} />
                            <p className='text-gray-700'>{t('link')} </p>
                            <Link href='https://portal.labeldictate.com' className='text-blue-500' target='_blank'>https://portal.labeldictate.com</Link>
                            <p className='text-gray-700'>&</p>
                            <Link href='https://ayuda.labeldictate.com' className='text-blue-500' target='_blank'>https://ayuda.labeldictate.com</Link>
                        </div>

                    </section>
 

                    {/* description project  */}
                    <section id='description' className='mt-14 pb-10'>
                        <ul className='list-disc list-inside text-base text-black'>
                            {/* name project  */}
                            <li>
                                <span className='font-bold'>{t('name_proyect')}</span> <span>Portal</span>
                            </li>

                            {/* Rols  */}
                            <li>
                                <span className='font-bold'>Roles Web:</span>
                                <ul className='list-disc list-inside ml-6'> {/* Agrega ml-6 o pl-6 */}
                                    <li>
                                        <span>{t('rw_1')}</span>
                                    </li>
                                    <li>
                                        <span>{t('rw_2')}</span>
                                    </li>
                                    <li>
                                        <span>{t('rw_3')}</span>
                                    </li>
                                </ul>
                            </li>
                            {/* Client company */}
                            <li>
                                <span className='font-bold'>{t('client_company')}</span> <span>Label Dictate LATAM</span>
                            </li>

                            {/* Property */}
                            <li>
                                <span className='font-bold'>{t('property')}</span> 
                                <span>{t('property_disclaimer')}</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Portal