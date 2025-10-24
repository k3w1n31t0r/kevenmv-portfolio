'use client'
import React  from 'react'
import { isPair } from '@/utilities/utilities'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/utilities/constants'
import { useTranslations } from 'next-intl'

const TextSubtitle = ({subtitle}: {subtitle: string}) => { 
	
	const subs = subtitle.split('|');
	return (
	<>
		{subs.map((e,i) => (
			<p key={i} 
			   className='text-gray-700 text-start mb-3'
			>{e}</p>
		))}
	</>
	)
}
const Projects = () => {

	const t = useTranslations('Components.Home.Projects');
	return (
		<section id="projects">
			<div className='p-10 md:pt-20'>
				<div className='flex flex-col justify-center'>
					<h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>{t('title')}</h2>
					
					<p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14 text-gray-700'>
						{t('subtitle')} 
					</p>              
				</div>

					<div className='p-10 md:px-10 lg:px-32 '>
					{
						projects.map((e,i) => (
							<div key={i} className={`flex flex-col ${isPair(i) ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-10 border-b last:border-b-0 border-gray-300 pb-10`}>
								<div className={`md:basis-5/12 ${isPair(i) ? 'me-0 md:me-10' : ''}`}>
									<article className='custom'>
										<Image src={e.image} alt={e.title} />
										<Image src={e.image2} alt={e.title} />
									</article>
								</div>
								<div className={`md:basis-7/12 text-left ${!isPair(i) ? 'me-0 md:me-10' : ''}`}>
									<p className='mb-4 text-2xl  mt-10 md:mt-0 font-bold'>{t(e.title)}</p>
									{ <TextSubtitle subtitle={t(e.text)} /> }
									<div className='inline-block'>
										<Link 
											href={`project/${e.url}`} 
											className='btn-secondary'
										>{t('view_more')}</Link>
									</div>
								</div>
							</div>			
						))
					}
					</div>
			</div>
		</section>
	)
}

export default Projects