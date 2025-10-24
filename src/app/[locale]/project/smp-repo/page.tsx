'use client'
import React from 'react'
import Span from '@/components/_components/Span'
import Carousel from '@/components/_components/Carousel'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import codalyHero from '@/public/images/smp/smp.png'
import codalyHero2 from '@/public/images/smp/smp2.png'

const images = [
    {
      original: codalyHero.src,
      thumbnail: codalyHero.src,
    },
    {
      original: codalyHero2.src,
      thumbnail: codalyHero2.src,
    }
];
const SMPRepo = () => {

    const t = useTranslations('App.Project.SMPRepo'); // Especifica el namespace "Home"
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
                            <h1 className='text-blue-500 text-4xl lg:text-6xl text-center font-bold uppercase my-10'>SMP Repo </h1>                                                                
                            <Span text={t('text_1')} />
                            <Span text={t('text_2')} />
                        </div>
                    </section>

                    {/* carousels  */}
                    <section id="project-properties" className='mt-5 lg:mt-14'>

                        {/* carousell web  */}
                        <div className='mb-3'>
                            <Carousel images={images}/>
                            <p className='text-gray-700'>{t('link')} </p>
                            <Link href='https://smp.labeldictate.com/' className='text-blue-500' target='_blank'>https://smp.labeldictate.com/</Link>
                        </div>
                     
                    </section>
 
                    {/* videos  */} 
                    <section id='tutorial' className='mt-5 md:mt-10'>
                        {/* video 1 */}
                        <div className='mb-10'>
                            <h2 className='text-lg font-bold uppercase text-start text-black'>{t('text_3')}</h2>
                            <Link href='https://ayuda.labeldictate.com/2023/08/18/importar-archivos-base-de-datos-catalogos-productos-utilizando-google-drive-y-ftp/' className='text-blue-500' target='_blank'>SMP Repo - Importar Archivos Base de Datos Catalogos Productos</Link>
                        </div>
                    </section>

                    {/* description project  */}
                    <section id='description' className='mt-14 pb-10'>
                        <ul className='list-disc list-inside text-base text-black'>
                            {/* name project  */}
                            <li>
                                <span className='font-bold'>{t('name_proyect')}</span> <span>SMP Repo</span>
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

export default SMPRepo

