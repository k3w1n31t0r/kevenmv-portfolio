'use client'
import Link from 'next/link';
import React from 'react'
import Span from '../../../../components/_components/Span';
import { useTranslations } from 'next-intl';
import ribetecHero from '@/public/images/ribetec/1.png'
import ribetecHero2 from '@/public/images/ribetec/2.png'
import ribetecHero3 from '@/public/images/ribetec/3.png'
import ribetecHero4 from '@/public/images/ribetec/4.png'
import ribetecHero5 from '@/public/images/ribetec/5.png'
import Carousel from '@/components/_components/Carousel';

const images = [
  {
    original: ribetecHero.src,
    thumbnail: ribetecHero.src,
  },
  {
    original: ribetecHero2.src,
    thumbnail: ribetecHero2.src,
  },
  {
    original: ribetecHero3.src,
    thumbnail: ribetecHero3.src,
  },
  {
    original: ribetecHero4.src,
    thumbnail: ribetecHero4.src,
  },
  {
    original: ribetecHero5.src,
    thumbnail: ribetecHero5.src,
  }
]
const Ribetec = () => {
    
    const t = useTranslations('App.Project.Ribetec'); // Especifica el namespace "Portal"

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
                            <h1 className='text-blue-500 text-4xl lg:text-6xl text-center font-bold uppercase my-10'>Soporte Ribetec </h1>                                                                
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
                            <Link href='https://soporte.ribetec.com' className='text-blue-500' target='_blank'>https://soporte.ribetec.com</Link>
                            <p className='text-gray-700'>&</p>
                            <Link href='https://ayuda.ribetec.com' className='text-blue-500' target='_blank'>https://ayuda.ribetec.com</Link>
                        </div>

                    </section>
 

                    {/* description project  */}
                    <section id='description' className='mt-14 pb-10'>
                        <ul className='list-disc list-inside text-base text-black'>
                            {/* name project  */}
                            <li>
                                <span className='font-bold'>{t('name_proyect')}</span> <span>Soporte Ribetec</span>
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

export default Ribetec