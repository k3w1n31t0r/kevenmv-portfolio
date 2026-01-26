'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { IoMenu, IoClose } from 'react-icons/io5'

type NavItem = { key: 'home' | 'about' | 'projects' | 'contact'; href: string }

const Navigation = () => {
  const t = useTranslations('Components.Navigation')
  const pathname = usePathname()
  const locale = useLocale()

  const isHome = pathname === `/${locale}/` || pathname === `/${locale}`

  const createLink = (hash: string) => (isHome ? hash : `/${locale}/${hash}`)

  const items: NavItem[] = useMemo(
    () => [
      { key: 'home', href: `/${locale}#` },
      { key: 'about', href: createLink('#about') },
      { key: 'projects', href: createLink('#projects') },
      { key: 'contact', href: createLink('#contact') },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale, pathname]
  )

  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = () => setOpen(false)
  const toggle = () => setOpen((v) => !v)

  // ✅ Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // ✅ Bloquear scroll cuando está abierto (clave para móvil)
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // ✅ Click afuera (pero sin “atravesar” el overlay)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) close()
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const isActive = (href: string) => {
    if (href === `/${locale}#`) return isHome
    return false
  }

  return (
    <>
      {/* Desktop */}
      <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={[
              'relative text-sm font-bold uppercase tracking-wide text-slate-700',
              'transition hover:text-slate-900',
              isActive(item.href) ? 'text-slate-900' : '',
            ].join(' ')}
          >
            {t(item.key)}
            {isActive(item.href) && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-slate-900" />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile button */}
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? <IoClose size={22} /> : <IoMenu size={22} />}
      </button>

      {/* Mobile overlay + drawer */}
      {open && (
        <div
          id="mobile-nav"
          className={[
            'fixed inset-0 isolate',          // ✅ isolate evita stacking raro
            'z-[2147483647] lg:hidden',       // ✅ z-index ultra alto para que no lo tape nada
          ].join(' ')}
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Drawer wrapper */}
          <div className="absolute inset-y-0 right-0 w-[88%] max-w-sm p-4">
            <div
              ref={panelRef}
              className={[
                'flex h-[calc(100dvh-2rem)] flex-col', // ✅ altura real del viewport (resta p-4 arriba/abajo)
                'rounded-3xl bg-white',               // ✅ fondo sólido SIEMPRE
                'shadow-2xl shadow-black/30',
                'ring-1 ring-black/10',
                'overflow-hidden',                    // ✅ evita “cortes” raros del fondo en algunos browsers
              ].join(' ')}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5">
                <span className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-slate-200 bg-white p-2 text-slate-900 transition hover:bg-slate-50"
                  aria-label="Close menu"
                >
                  <IoClose size={22} />
                </button>
              </div>

              {/* Body (scroll si hace falta) */}
              <div className="flex-1 space-y-2 px-5">
                {items.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={close}
                    className={[
                      'flex items-center justify-between rounded-2xl px-4 py-3',
                      'text-base font-extrabold uppercase tracking-wide text-slate-900',
                      'transition hover:bg-slate-50 active:bg-slate-100',
                    ].join(' ')}
                  >
                    <span>{t(item.key)}</span>
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="p-5 pt-6">
                <p className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-500">
                  Tip: presiona <span className="font-bold">ESC</span> para cerrar.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
