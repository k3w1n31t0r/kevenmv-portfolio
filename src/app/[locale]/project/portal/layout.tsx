import type { Metadata } from 'next'
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
      title: 'Portal',
      description: "Management of subscriptions and licenses",
    },
    es: {
      title: 'Portal - Gestión de suscripciones y licencias',
      description: 'Manejo de suscripciones y licencias',
    },
  }

  const meta = metadataByLocale[locale] || metadataByLocale.en

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title      : meta.title,
      description: meta.description,
      images     : avatar.src,
      url        : `https://devkeven.com/${locale}`,
      type       : 'website',
    },
    twitter: {
      title      : meta.title,
      description: meta.description,
      images     : avatar.src,
      card       : 'summary_large_image',
    },
    robots : process.env.NODE_ENV === 'production' ? 'follow, index' : 'noindex, nofollow',
    authors    : [{
        name: "Keven Maria",
        url : "https://devkeven.com",
    }]
  }
}

export default async function LocaleLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
        {children}
    </>
  )
}
