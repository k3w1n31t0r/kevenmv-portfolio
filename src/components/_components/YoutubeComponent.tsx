'use client'
import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const YoutubeComponent = ({id, title}: {id: string, title: string}) => (
  <>
    <LiteYouTubeEmbed
        id={id}
        title={title}
    />
  </>
);

export default YoutubeComponent
