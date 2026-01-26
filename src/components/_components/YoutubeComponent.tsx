'use client'

import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YoutubeComponent({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
      <div className="aspect-video">
        <LiteYouTubeEmbed id={id} title={title} />
      </div>
    </div>
  )
}
