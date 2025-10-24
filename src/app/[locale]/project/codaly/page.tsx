'use client'
import React from 'react'
import Span from '@/components/_components/Span'
import Carousel from '@/components/_components/Carousel'
import Link from 'next/link'
import CarouselApp from '@/components/_components/CarouselApp'
import YoutubeComponent from '@/components/_components/YoutubeComponent'
import { useTranslations } from 'next-intl'
import codalyHero from '@/public/images/codaly/codaly_hero.png'
import codalyHero2 from '@/public/images/codaly/codaly_hero_2.png'
import codalyHero3 from '@/public/images/codaly/codaly_hero_3.png'
import codalyHero4 from '@/public/images/codaly/codaly_hero_4.png'
import codalyHero5 from '@/public/images/codaly/codaly_hero_5.png'

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
    },
    {
      original: codalyHero5.src,
      thumbnail: codalyHero5.src,
    }
];
const Codaly = () => {

    const t = useTranslations('App.Project.Codaly'); // Especifica el namespace "Home"
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
                            <h1 className='text-blue-500 text-4xl lg:text-6xl text-center font-bold uppercase my-10'>Codaly </h1>                                                                
                            <Span text={t('text_1')} />
                            <Span text={t('text_2')} />
                            <Span text={t('text_3')} />
                        </div>
                    </section>

                    {/* carousels  */}
                    <section id="project-properties" className='mt-5 lg:mt-14'>

                        {/* carousell web  */}
                        <div className='mb-3'>
                            <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center text-black'>Codaly web</h2>
                            <Carousel images={images}/>
                            <p className='text-gray-700'>{t('link')} </p>
                            <Link href='https://codaly.com.mx' className='text-blue-500' target='_blank'>https://codaly.com.mx</Link>
                        </div>

                        {/* carousell app  */}
                        <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center text-black'>Codaly mobile (app)</h2>
                        <div className='container mx-auto px-4'>
                            <CarouselApp/>
                            
                        </div>
                        <p className='text-gray-700'>{t('link')} </p>
                        <Link href='https://play.google.com/store/apps/details?id=com.codaly&hl=es_EC' target='_blank' className='text-blue-500'>Play Store</Link>
                     
                    </section>
 
                    {/* videos  */} 
                    <section id='videos' className='mt-5 lg:mt-14'>
                        <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center text-black'>{t('text_4')}</h2>

                        <YoutubeComponent id='DC-deWuLHcE' title='Imprime tus etiquetas con Codaly'/>
                    {/* https://youtube.com/shorts/DC-deWuLHcE?feature=shared */}
                    </section>

                    {/* description project  */}
                    <section id='description' className='mt-14 pb-10'>
                        <ul className='list-disc list-inside text-base text-black'>
                            {/* name project  */}
                            <li>
                                <span className='font-bold'>{t('name_proyect')}</span> <span>Codaly</span>
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
                            {/* Rols app  */}
                            <li>
                                <span className='font-bold'>Roles Mobile App:</span>
                                <ul className='list-disc list-inside ml-6'> {/* Agrega ml-6 o pl-6 */}
                                    <li>
                                        <span>{t('ra_1')}</span>
                                    </li>
                                    <li>
                                        <span>{t('ra_2')}</span>
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

export default Codaly

