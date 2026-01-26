'use client'

import Link, { LinkProps } from 'next/link'
import React from 'react'

type Props = LinkProps & {
  targetId: string
  className?: string
  children: React.ReactNode
}

export default function ScrollLink({ targetId, className, children, ...props }: Props) {
  return (
    <Link
      {...props}
      href={`#${targetId}`}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        history.replaceState(null, '', `#${targetId}`)
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }}
    >
      {children}
    </Link>
  )
}
