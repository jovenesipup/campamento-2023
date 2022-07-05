import React, { useEffect, useRef } from "react";
import VideoBanner from '../assets/video/banner-video.mp4'

export default function hero() {
  const bannerVideo = useRef();
  const buttonPlay = useRef();

  const playVideo = async () => {
    try {
      await bannerVideo.current.play()
    } catch (error) {
      console.log(error)
    }
  }

  const syncroVideo = () => {
      buttonPlay.current.classList.add('hidden')
      playVideo()
  }

  useEffect(() => {
    const childVideo = bannerVideo.current
    const isVideoPlaying = !!(childVideo.currentTime > 0 && !childVideo.paused && !childVideo.ended && childVideo.readyState > 2);
    
    if(!isVideoPlaying){
      syncroVideo();
      bannerVideo.current.muted = false
    }

  },[])

  const handlePlayVideo = (e) => {
    const childVideo = bannerVideo.current
    const isVideoPlaying = !!(childVideo.currentTime > 0 && !childVideo.paused && !childVideo.ended && childVideo.readyState > 2);
    if(!isVideoPlaying){
      syncroVideo();
      bannerVideo.current.muted = false
    }
    else{
      buttonPlay.current.classList.remove('hidden')
      bannerVideo.current.pause()
    }
  }
  
  return (
    <div className="relative">
      <video
        id="video"
        autoPlay
        className="w-full"
        ref={bannerVideo}
        muted
        onClick={handlePlayVideo}
        webkit-playsinline 
        playsinline
      >
        <source
          src={VideoBanner}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <button id="play-button" className="absolute z-20 top-0 bottom-0 right-[calc(50%-48px)] text-slate-50 " ref={buttonPlay} onClick={handlePlayVideo}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
}
