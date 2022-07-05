import React from "react";
import VideoBanner from '../assets/video/banner-video.mp4'

export default function hero() {
  return (
    <video
      autoPlay
      controls
      className="w-full"
    >
      <source
        src={VideoBanner}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
