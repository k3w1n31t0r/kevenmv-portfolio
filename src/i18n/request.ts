// src/i18n/request.ts
export default function getRequestConfig(request?: Request) {
    const defaultLocale = 'en';
    
    // Si no se proporciona un request o sus headers, retorna el locale por defecto.
    if (!request || !request.headers || typeof request.headers.get !== 'function') {
      return { locale: defaultLocale };
    }
    
    const acceptLanguage = request.headers.get('accept-language');
    if (!acceptLanguage) return { locale: defaultLocale };
  
    // Separa los valores del header (por ejemplo: "es-ES,es;q=0.9,en;q=0.8")
    const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
    
    // Si se encuentra 'es' entre los idiomas preferidos, retorna ese locale
    if (languages.includes('es')) {
      return { locale: 'es' };
    }
    
    return { locale: defaultLocale };
  }
  
// src/i18n/request.ts
// src/i18n/request.ts
// import type { Pathnames } from 'next-intl/routing';

// export const locales = ['en', 'es'] as const;
// export type Locale = (typeof locales)[number];
// export const defaultLocale: Locale = 'en';

// export const pathnames = {
//   '/': { en: '/', es: '/' },
//   '/project/[slug]': {
//     en: '/project/[slug]',
//     es: '/proyecto/[slug]'
//   }
// } satisfies Pathnames<typeof locales>;

// // (opcional) si quieres seguir detectando locale por Accept-Language
// export default function getRequestConfig(_: Request | undefined) {
//   return { locale: defaultLocale }; // en static export no hay request real en tiempo de ejecución
// }
