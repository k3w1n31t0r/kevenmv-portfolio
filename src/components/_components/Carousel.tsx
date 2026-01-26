'use client'

import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

type ImageCarousel = {
  original: string
  thumbnail: string
}

type Props = {
  images: ImageCarousel[]
  autoPlay?: boolean
}

export default function Carousel({ images, autoPlay = true }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={autoPlay}
        slideInterval={3000}
        additionalClass="rounded-3xl"
        showFullscreenButton={false}
      />
    </div>
  )
}
