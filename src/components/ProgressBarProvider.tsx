'use client'

import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

type ProgressBarProviderProps = {
  color?: string
  height?: string
}

export default function ProgressBarProvider({
  color = '#2563EB', // blue-600
  height = '3px',
}: ProgressBarProviderProps) {
  return (
    <ProgressBar
      height={height}
      color={color}
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
