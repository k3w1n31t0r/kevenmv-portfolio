'use client'
import React from 'react'
import Span from '@/components/_components/Span'
import Carousel from '@/components/_components/Carousel'
import Link from 'next/link'
import CarouselApp from '@/components/_components/CarouselApp'
import YoutubeComponent from '@/components/_components/YoutubeComponent'
import { useTranslations } from 'next-intl'
import codalyHero from '@/public/images/designer/des1.png'
import codalyHero2 from '@/public/images/designer/des2.png'
import codalyHero3 from '@/public/images/designer/des3.png'
import codalyHero4 from '@/public/images/designer/des4.png'

const images = [
    {
      original: codalyHero.src,
      thumbnail: codalyHero.src,
    },
    {
      original: codalyHero2.src,
      thumbnail: codalyHero2.src,
    },
    {
      original: codalyHero3.src,
      thumbnail: codalyHero3.src,
    },
    {
      original: codalyHero4.src,
      thumbnail: codalyHero4.src,
    }
];
const Designer = () => {

    const t = useTranslations('App.Project.Designer'); // Especifica el namespace "Home"
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
                            <h1 className='text-blue-500 text-4xl lg:text-6xl text-center font-bold uppercase my-10'>Diseñador de etiquetas </h1>                                                                
                            <Span text={t('text_1')} />
                            <Span text={t('text_2')} />
                            <Span text={t('text_3')} />
                        </div>
                    </section>

                    {/* carousels  */}
                    <section id="project-properties" className='mt-5 lg:mt-14'>

                        {/* carousell web  */}
                        <div className='mb-3'>
                            <Carousel images={images}/>
                            <p className='text-gray-700'>{t('link')} </p>
                            <Link href='https://codaly.com.mx/designer' className='text-blue-500' target='_blank'>https://codaly.com.mx/designer</Link>
                        </div>
                     
                    </section>
 
                    {/* videos  */} 
                    <section id='videos' className='mt-5 md:mt-10 lg:mt-14'>
                        {/* video 1 */}
                        <div className='mb-10'>
                            <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center text-black'>{t('text_4')}</h2>
                            <YoutubeComponent id='3j6ray10Sq0' title='Imprime tus etiquetas con Codaly'/>
                        </div>

                        {/* video 2 */}
                        <div>
                            <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center text-black'>{t('text_4')}</h2>
                            <YoutubeComponent id='OURa_hS7zNQ' title='Imprime tus etiquetas con Codaly'/>
                        </div>
                    </section>

                    {/* description project  */}
                    <section id='description' className='mt-14 pb-10'>
                        <ul className='list-disc list-inside text-base text-black'>
                            {/* name project  */}
                            <li>
                                <span className='font-bold'>{t('name_proyect')}</span> <span>{t('name')}</span>
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

export default Designer

