"use client"
import React from 'react'
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";


type ImageCarousel = {
    original: string,
    thumbnail: string
}
type Props = {
  images : ImageCarousel[]
}
const Carousel = ({images}: Props) => {
    return (
        <div className='border-2 border-gray-300 rounded'>
            <ImageGallery 
                items={images}
                showPlayButton={false} 
                autoPlay={true} 
                slideInterval={3000} 
                additionalClass='rounded-xl '

            />
        </div>
    )
}

export default Carousel
