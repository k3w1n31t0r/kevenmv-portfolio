'use client'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'
import { LuMousePointerClick } from "react-icons/lu";

const skills = [    
    {
        skill: 'HTML',
        tech : 'front'
    },
    {
        skill: 'CSS',
        tech : 'front'
    },
    {
        skill: 'Javascript',
        tech : 'front'
    },
    {
        skill: 'PHP',
        tech : 'backend'
    },
    {
        skill: 'Node JS',
        tech : 'backend'
    },
    {
        skill: 'Express JS',
        tech : 'backend'
    },
    {
        skill: 'React',
        tech : 'framework_front'
    },        
    {
        skill: 'Bootstrap',
        tech : 'framework_front'
    },
    {
        skill: 'Tailwind css',
        tech : 'framework_front'
    },
    {
        skill: 'React Native',
        tech : 'framework_back'
    },
    {
        skill: 'Laravel',
        tech : 'framework_back'
    },
    {
        skill: 'MySQL',
        tech : 'sql'
    },
    {
        skill: 'PostgresSQL',
        tech : 'sql'
    },
    {
        skill: 'MongoDB',
        tech : 'nosql'
    },
    {
        skill: 'Firebase',
        tech : 'nosql'
    },
    {
        skill: 'Git',
        tech : 'other'
    },
    {
        skill: 'Github',
        tech : 'other'
    },
    {
        skill: 'Linux',
        tech : 'other'
    },
    {
        skill: 'AWS EC2',
        tech : 'other'
    },
    {
        skill: 'AWS Lambda',
        tech : 'other'
    },
    {
        skill: 'AWS RDS',
        tech : 'other'
    },
    {
        skill: 'PlayStore developer',
        tech : 'other'
    },
    {
        skill: 'PayPal payments',
        tech : 'payments'
    },
    {
        skill: 'Stripe payments',
        tech : 'payments'
    },
]

const Badge = ({ tech, skill }: { tech: string, skill: string }) => {
    let color;

    switch (tech) {
        case 'front':
            color = 'bg-blue-200/70';
            break;
        case 'backend':
            color = 'bg-green-200/70';
            break;
        case 'sql':
            color = 'bg-yellow-200/70';
            break;
        case 'nosql':
            color = 'bg-yellow-200/70';
            break;
        case 'other':
            color = 'bg-gray-200/70';
            break;
        case 'framework_front':
            color = 'bg-indigo-200/70';
            break;
        case 'framework_back':
            color = 'bg-purple-200/70';
            break;
        case 'payments':
            color = 'bg-lime-200/70';
            break;
    
        default:
            color = 'bg-gray-200/70';
            break;
    }
    
    return (
        <div className={`${color} rounded-full pt-3 pb-3 ps-10 pe-10 text-center flex-col items-center `}>
            <span className='text-gray-600 font-semibold'>{skill}</span>
        </div>
    )
}

const About = () => {    

    const t = useTranslations('Components.Home.About');

  return (
    <section id="about" className='bg-blue-500 text-white'>
        <div className='p-10 md:pt-20'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>{t('title')} <span className='underline decoration-2 '>{t('subtitle')}</span></h2>
                <p className='text-lg/7 md:text-2xl/7 text-start lg:text-center lg:pl-32 lg:pr-32 mb-14'>{t('about')}</p>              
            </div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<div>
                    <label className='text-2xl font-bold justify-center lg:justify-start flex'>{t('know_me')}</label>
                    <p className='mt-7 text-base/7 md:text-lg/7 '>{t('know_me2')}</p>
                    <p className='mt-7 text-base/7 md:text-lg/7 '>{t('know_me3')}</p>
                    <p className='mt-7 text-base/7 md:text-lg/7 '>{t('know_me4')}</p>
        
                    <Link href="#contact" className="btn-primary flex lg:!inline-flex mb-10 justify-center">
                        <span className="me-2">{t('contact_me')}</span> 
                        <LuMousePointerClick />
                    </Link>

                
                </div>

				<div>
                    <label className='text-xl lg:text-2xl font-bold justify-center lg:justify-start flex'>{t('my_skills')}</label>
                    <div className='mt-7 flex flex-wrap gap-2'>
                        {
                            skills.map((e, i) => <Badge key={i} tech={e.tech} skill={e.skill}/>)
                        }
                    </div>
				</div>
			</div>

        </div>
      
    </section>
  )
}

export default About