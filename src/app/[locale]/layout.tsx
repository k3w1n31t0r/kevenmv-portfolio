// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/ProgressBarProvider'
import avatar from '@/public/images/avatar.png'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

// Genera páginas estáticas para cada idioma
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

// Define metadatos según el idioma
export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  const { params } = props;
  const { locale }   = await params;

  const metadataByLocale: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Keven M. - Developer',
      description: "I'm Keven M., a developer specializing in web and mobile, as well as DevOps with AWS.",
    },
    es: {
      title: 'Keven M. - Desarrollador',
      description: 'Soy Keven M., desarrollador especializado en web, móvil y DevOps con AWS.',
    },
  }

  const meta = metadataByLocale[locale] || metadataByLocale.en

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: avatar.src,
      url: `https://devkeven.com/${locale}`,
      type: 'website',
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      images: avatar.src,
      card: 'summary_large_image',
    },
    robots: {
      index: process.env.NODE_ENV === 'production',
    },
  }
}

export default async function LocaleLayout(props: LayoutProps) {
  const { params, children } = props;
  const { locale } = await params;
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>

      <div className="leading-normal tracking-normal text-gray-900 flex flex-col">
        <Navbar locale={locale} />
        <Providers />
          {children}
        {/* <Footer locale={locale} /> */}
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
