import React, { useEffect, useRef } from "react";
import VideoBanner from '../assets/video/banner-video.mp4'
import BackgroundImage from '../assets/img/background.jpg'

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
      playVideo()
  }

  useEffect(() => {
    const childVideo = bannerVideo.current
    const isVideoPlaying = !!(childVideo.currentTime > 0 && !childVideo.paused && !childVideo.ended && childVideo.readyState > 2);
    
    if(!isVideoPlaying){
      syncroVideo();
      bannerVideo.current.muted = false
    }else{
      bannerVideo.current.pause()
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
      bannerVideo.current.pause()
    }
  }
  
  return (
    <div className="relative pt-20 lg:flex lg:container lg:pt-28 lg:pb-8 lg:justify-between">
      <div className="">
        <h1 className="hidden lg:block text-8xl text-slate-200 text-center font-bold">Te damos la bienvenida!</h1>
        <p className="hidden lg:block text-2xl text-center text-slate-400 pt-8">Del 16 al 18 de Febrero</p>
      </div>
      <div>
        <video
          id="video"
          className="w-full lg:max-w-4xl lg:rounded-lg lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
          ref={bannerVideo}
          onClick={handlePlayVideo} 
          webkit-playsinline="true"
          playsInline
          controls
        >
          <source
            src={VideoBanner}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button id="play-button" className="hidden absolute z-20 top-0 bottom-0 right-[calc(50%-48px)] text-slate-50" ref={buttonPlay} onClick={handlePlayVideo}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
