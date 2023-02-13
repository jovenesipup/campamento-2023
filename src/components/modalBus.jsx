import React from "react";
import { useRef } from "react";

export default function modalBus(props) {
  const modal = useRef(null)
  const closeModal = () => {
    modal.current.classList.add('hidden')
    modal.current.classList.remove('absolute')
  }
  return (
    <div ref={modal} className="absolute w-full h-screen top-0 left-0 bg-dark-lila/60 overflow-hidden text-dark-lila overflow-y-scroll" style={{zIndex: "200"}}>
      <div className="p-8 mt-24 relative container mx-auto rounded-lg lg:mt-32 bg-slate-50 w-full lg:w-4/12 lg:mx-auto shadow-lg shadow-light-green border-4 border-x-light-purple border-y-light-green">
        {props.children}
      </div>
    </div>
  );
}
