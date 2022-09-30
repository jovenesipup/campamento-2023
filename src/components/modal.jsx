import React from "react";
import { useRef } from "react";

export default function modal() {
  const modal = useRef(null)
  const closeModal = () => {
    modal.current.classList.add('hidden')
    modal.current.classList.remove('absolute')
  }
  return (
    <div ref={modal} className="absolute w-full h-screen top-0 left-0 bg-dark-lila/60 overflow-hidden">
      <div className="p-8 mt-24 container mx-auto rounded-lg lg:mt-48 bg-slate-50 w-full lg:w-96 lg:mx-auto shadow-lg shadow-light-green border-4 border-x-light-purple border-y-light-green">
        <h1 className="text-2xl">Ya casi estás listo</h1>
        <p className="text-lg pt-4">
          Da click en el siguien enlace para realizar tu pago
        </p>
        <div className="pt-4 underline text-light-purple font-bold ">
          <a
            target={"_blank"}
            href="https://wa.me/51981257046?text=Hola%20quiero%20continuar%20con%20el%20pago%20de%20mi%20cupo%20para%20el%20campamento%202023"
            onClick={closeModal}
          >
            Ir a pagar
          </a>
        </div>
      </div>
    </div>
  );
}
