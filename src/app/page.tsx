// app/page.tsx
'use client'
import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    const locales              = ['en', 'es'];
    const defaultLocale        = 'en';
    const browserLang          = navigator.language.split('-')[0];                             // Ej: 'es' de 'es-ES'
    const locale               = locales.includes(browserLang) ? browserLang : defaultLocale;
          window.location.href = `/${locale}`;
  }, []);

  // return <p>Redirigiendo...</p>;
  return <></>;
}
