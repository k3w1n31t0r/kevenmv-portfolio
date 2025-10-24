'use client'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl';
import avatar from '@/public/images/avatar.png'
const Home = () => {
    const t = useTranslations('Components.Home.Home'); // Especifica el namespace "Home"
    return (
        <main id="home" className="overflow-hidden relative h-[calc(100vh-83px)]">
            <section className='p-10 h-full'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center mb-8'>{t('title')}</h1>
                    <h2 className='text-lg lg:text-2xl text-start md:text-center px-0 md:px-32 mb-10'>{t('subtitle')}</h2>
                    <div className='border-b border-gray-300'>
                        <div className='relative flex justify-center'>
                            <Image
                                src={avatar}
                                alt="Avatar"
                                className="relative z-10 object-cover w-52 sm:w-64 lg:w-1/4"
                            />
                        </div>
                    </div>
                </div>            
            </section>
        </main>
    )
}

export default Home