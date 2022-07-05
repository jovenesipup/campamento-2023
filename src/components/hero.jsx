import React, { useEffect, useRef } from "react";
import VideoBanner from '../assets/video/banner-video.mp4'

export default function hero() {
    const bannerVideo = useRef(null);
    useEffect(() => {
        bannerVideo.current.play();
      },[]);
  return (
    <video
      autoPlay
      controls
      className="w-full"
      ref={bannerVideo}
    >
      <source
        src={VideoBanner}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
