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

  const metadataByLocale: Record<string, any> = {
    en: {
      title      : 'Codaly - Web and mobile printing',
      description: "Print labels and manage prices efficiently with Codaly.",
      keywords   : ["Designer", "Labels", "Codaly", "Label printing", "Product printing", "Price printing", "labelary", "bartender", "zebra designer"],
    },
    es: {
      title      : "Diseñador de etiquetas - Codaly",
      description: "Crea y diseña tus etiquetas de productos con Codaly. Personaliza y ajusta los elementos de tu etiqueta para obtener un diseño perfecto.",
      keywords   : ["Diseñador", "Etiquetas", "Codaly", "Impresión de etiquetas", "Impresión de productos", "Impresión de precios", "labelary", "bartender", "zebra designer"],
    },
  }

  const meta = metadataByLocale[locale] || metadataByLocale.en

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
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
