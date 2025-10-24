"use client"
import React from 'react'
import ImageGallery from "react-image-gallery";
import codalyApp from '@/public/images/codaly/codaly_app_1.png'
import codalyApp2 from '@/public/images/codaly/codaly_app_2.png'
import codalyApp3 from '@/public/images/codaly/codaly_app_3.png'
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
    {
      original: codalyApp.src,
      thumbnail: codalyApp.src,
    },
    {
      original: codalyApp2.src,
      thumbnail: codalyApp2.src,
    },
    {
      original: codalyApp3.src,
      thumbnail: codalyApp3.src,
    },
];
const CarouselApp = () => {

    return (
        <>
            <ImageGallery 
                items={images}
                showPlayButton={false} 
                autoPlay={true} 
                slideInterval={3000} 
                showThumbnails={false}
                showFullscreenButton={false}
            />
        </>
    )
}

export default CarouselApp
