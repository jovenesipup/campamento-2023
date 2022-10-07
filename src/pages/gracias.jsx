import React from "react";
import VideoBanner from "../assets/video/gracias.mp4";
import Consulta from "../assets/img/consulta.svg";
import Modal from "../components/modal";
import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function gracias() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div>
      <div className="relative py-20 lg:flex lg:container lg:pt-28 lg:pb-8 lg:justify-between">
        <div className="">
          <h1 className="hidden lg:block text-6xl text-slate-200 text-center font-bold">
            Gracias por haberte registrado
          </h1>
          <p className="hidden lg:block text-2xl text-center text-slate-400 pt-8">
            Te esperamos del otro lado
          </p>
        </div>
        <div>
          <video
            id="video"
            className="w-full lg:max-w-4xl lg:rounded-lg lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
            webkit-playsinline="true"
            playsInline
            controls
          >
            <source src={VideoBanner} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="container py-8 mb-24 max-w-full flex flex-col justify-between bg-dark-lila lg:px-48">
        <div className="pb-4 flex flex-row justify-between">
          <h2 className="pt-4  text-slate-50 text-2xl lg:text-5xl">
            Como va mi cupo
            <p className=" text-slate-200 text-lg mt-6">
              Puedes hacer seguimiento a tu registro dando click al siguiente boton
            </p>
            <span className="text-xs italic">#influenciaapostolica</span>
          </h2>
          <div className="w-40 lg:w-60">
            <img src={Consulta} alt="happy" className="w-40 lg:w-60" />
          </div>
        </div>
        <Link to="/consulta">
          <button className="py-2 px-4 h-10 w-full uppercase text-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10 lg:max-w-md">
            Consultar
          </button>
        </Link>
      </div>
      <Modal></Modal>
    </div>
  );
}
