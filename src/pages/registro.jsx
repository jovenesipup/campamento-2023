import React from "react";
import Form from "../components/form";
import Joven from "../assets/img/joven.jpg";
import ModalConsulta from "../components/modalConsulta";
import Close from "../assets/img/close.svg";
import Triste from "../assets/img/triste.svg";
import { useState } from "react";

export default function registro() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="container backdrop-blur-3xl mx-auto lg:px-16">
      {modalOpen && (
        <ModalConsulta>
          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-10"
          >
            <img src={Close} alt="" />
          </button>
          <h1 className="text-2xl">Lo sentimos</h1>
          <img className="w-36 mx-auto" src={Triste} alt="" />

          <p className="text-lg pt-4">
            Ya cerramos las inscripciones para nuestro campamento
          </p>
          <p className="text-lg pt-4">
            Te invitamos a que seas parte del próximo eventos, te estaremos informando.
          </p>
          <p className="text-lg pt-4 text-light-purple">
            Gracias.
          </p>
        </ModalConsulta>
      )}
      <div className="py-36 lg:flex lg:justify-between ">
        <div className="lg:max-w-lg">
          <h1 className="text-slate-50 text-4xl font-bold lg:text-5xl">
            Muy bien! Estas muy cerca
          </h1>
          <p className="text-slate-50 text-xl py-8 lg:font-bold lg:text-2xl">
            Solo tienes que rellenar el formulario y seguir los pasos.
          </p>
          <img
            src={Joven}
            alt=""
            className="hidden lg:block lg:max-w-lg h-auto  lg:rounded-lg lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
          />
        </div>
        <div className="lg:w-3/6 lg:pl-4">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
