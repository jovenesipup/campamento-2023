import React from "react";
import Banner from "../components/banner";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Form from "../components/form";
import { Carousel } from "react-responsive-carousel";
import IglesiaCuartaZona from "../assets/video/i-cuarta-zona.mp4";
import IglesiaPanVida from "../assets/video/i-pan-vida.mp4";
import IglesiaSanGabriel from "../assets/video/i-san-gabriel.mp4";
import Musicos from "../assets/video/musicos.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Camen from "../assets/img/camen.png";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="font-sans backdrop-blur-3xl">
      <Hero></Hero>
      <Banner></Banner>
      <div className="container py-6 bg-slate-50 max-w-full text-center lg:flex lg:bg-slate-300 lg:mt-10 lg:justify-between md:px-28 lg:px-36">
        <div className="lg:bg-dark-lila lg:rounded-lg lg:p-10 lg:max-h-56 my-auto lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green">
          <h2 className="text-light-green font-bold text-3xl">
            Influencia Apostolica 2023
          </h2>
          <span className="bg-clip-text font-bold text-slate-400 shadow-light-green">
            ¡Vive la experiencia!
          </span>
        </div>
        <div className="lg:max-w-2xl lg:pl-10">
          <Carousel showArrows={true} showThumbs={false} showStatus={false}>
            <div>
              <video
                webkit-playsinline="true"
                playsInline
                className="w-full rounded-md lg:max-w-2xl lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
                controls
              >
                <source src={IglesiaCuartaZona} type="video/mp4" />
              </video>
              <p className="legend">Iglesia Cuarta Zona Collique</p>
            </div>
            <div>
              <video
                webkit-playsinline="true"
                playsInline
                className="w-full rounded-md lg:max-w-2xl lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
                controls
              >
                <source src={IglesiaPanVida} type="video/mp4" />
              </video>
              <p className="legend">Iglesia Pan de Vida</p>
            </div>
            <div>
              <video
                webkit-playsinline="true"
                playsInline
                className="w-full rounded-md lg:max-w-2xl lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
                controls
              >
                <source src={IglesiaSanGabriel} type="video/mp4" />
              </video>
              <p className="legend">Iglesia San Gabriel</p>
            </div>
          </Carousel>
          <p className="text-light-green pt-2 text-xl">
            Ellos estan listos, y tu, ¿Lo estas?
          </p>
        </div>
      </div>
      <div className="container py-6 max-w-full md:px-28 lg:px-36">
        <div className="rounded-lg flex justify-between">
          <img className="rounded-lg" src={Camen} alt="logo campapento" />
          <div className="pl-4 lg:pl-48">
            <h2 className="text-slate-50 text-3xl pb-4">
              Sobre el lugar de campamento
            </h2>

            <p className="text-slate-300 text-md">
              La comodidad es importante, asi que hemos escogido un gran lugar
              para este proposito.
            </p>
            <p className="text-slate-300 text-md">
              El Campamento Camen ofrece un amplio lugar con diferentes areas de
              segun la necesidad, cuenta con areas verdes, auditorio,
              habitaciones y zonas recreacionales
            </p>
            <Link to="/">
              <button className="my-4 px-4 h-10 w-full uppercase text-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10 lg:max-w-sm">
                Ver Galeria
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container bg-dark-lila py-6 max-w-full lg:flex md:px-28 lg:px-36 lg:justify-between">
        <div className="lg:mt-26 lg:bg-slate-200 lg:text-dark-lila lg:rounded-lg lg:p-8 lg:shadow-md lg:shadow-light-green lg:max-w-xl lg:max-h-56">
          <h2 className="text-slate-50 text-3xl text-center pb-4 lg:text-slate-600">
            ¡Nos estamos preparando para dar lo mejor para Dios!
          </h2>
          <p className="text-slate-300 text-lg pb-4 lg:text-dark-lila">
            Nuestro grupo Nacional De Alabanza de Lima esta dando lo mejor para
            ese gran evento
          </p>
        </div>
        <div className="lg:pl-10">
          <video
            webkit-playsinline="true"
            playsInline
            className="w-full max-w-sm h-auto rounded-md mx-auto lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
            controls
          >
            <source src={Musicos} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <div className="container mx-auto">
            <Form/>
        </div> */}
    </div>
  );
}
