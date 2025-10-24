// app/layout.tsx
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import avatar from '@/public/images/avatar.png'

const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://devkeven.com'),
  robots: process.env.NODE_ENV === 'production' ? 'follow, index' : 'noindex, nofollow',
  openGraph: {
    title      : "Dev Keven",
    description: "Developer/Desarrollador Keven",
    images     : avatar.src,
    url        : `https://devkeven.com`,
    type       : 'website',
  },
  twitter: {
    title      : "Dev Keven",
    description: "Developer/Desarrollador Keven",
    images     : avatar.src,
    card       : 'summary_large_image',
  },
  authors    : [{
      name: "Keven Maria",
      url : "https://devkeven.com",
  }]
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${openSans.className} scroll-smooth`}>
      <body className='bg-gray-200 mx-auto'>
        {children}
      </body>
    </html>
  )
}
