import React from 'react'

export default function Span({ text }: { text: string }) {
  return <p className="mx-auto mt-5 max-w-2xl text-base/7 text-white/90 md:text-lg/8">{text}</p>
}
