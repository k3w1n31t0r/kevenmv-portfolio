import React from 'react';
import Home from '@/components/home/Home'
import About from '@/components/home/About'
import Projects from '@/components/home/Projects'
import Contact from '@/components/home/Contact'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
const HomePage = () => {
	return (
		<>
			<Home/>
			<About/>
			<Projects/>
			<ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_SITE_PUBLIC!}>
				<Contact/>	
			</ReCaptchaProvider>
			
		</>
	)
}
export default HomePage