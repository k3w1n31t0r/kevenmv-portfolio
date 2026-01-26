'use client'

import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

type ToggleBarsProps = {
  open?: boolean
  onToggle?: (next: boolean) => void
  className?: string
  labelOpen?: string
  labelClose?: string
}

export default function ToogleBars({
  open,
  onToggle,
  className = '',
  labelOpen = 'Open menu',
  labelClose = 'Close menu',
}: ToggleBarsProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = typeof open === 'boolean'
  const isOpen = isControlled ? open : internalOpen

  const toggle = () => {
    const next = !isOpen
    if (!isControlled) setInternalOpen(next)
    onToggle?.(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={[
        'inline-flex items-center justify-center rounded-xl',
        'border border-slate-200 bg-white p-2 text-slate-900 shadow-sm',
        'transition hover:bg-slate-50 active:scale-[0.98]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
        className,
      ].join(' ')}
      aria-label={isOpen ? labelClose : labelOpen}
      aria-expanded={isOpen}
    >
      {isOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
    </button>
  )
}
