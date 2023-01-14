import React from "react";
import Joven from "../assets/img/joven.jpg";
import JoinImage from "../assets/img/consulta.svg";
import axios from "axios";
import Input from "../components/input";
import { useState, useRef, useEffect } from "react";
import ModalConsulta from "../components/modalConsulta";
import { Link } from "react-router-dom";
import Load from "../assets/img/load.svg";
import Feliz from "../assets/img/feliz.svg";
import Neutro from "../assets/img/neutro.svg";
import Triste from "../assets/img/triste.svg";
import MuyFeliz from "../assets/img/muyfeliz.svg";
import Close from "../assets/img/close.svg";

export default function consulta() {
  const [modalCont, setModalCont] = useState(0);
  const [dataModal, setDataModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const form = useRef(null);

  const validatedDni = async () => {
    const dni = form.current.querySelector("#user_dni").value;
    const res = await axios.get(
      `https://campamentoapi.pro/api/personas/dni/${dni}`
    );
    window.scrollTo(0, 0);
    if (res.data.length < 1) {
      setModalCont(0);
    } else {
      setModalCont(1);
      setDataModal(res.data[0]);
    }
    setIsLoad(false);
    setModalOpen(true);
  };

  const consultaCupo = (e) => {
    e.preventDefault();
    setIsLoad(true);
    validatedDni();
    console.log(modalCont);
  };
  useEffect(() => {
    setDataModal(dataModal);
    console.log(dataModal);
  }, [dataModal]);

  return (
    <div className="container backdrop-blur-3xl mx-auto lg:px-16">
      {(modalOpen && modalCont == 0 && (
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
            No se encontró cupo con el DNI ingresado
          </p>
          <p className="text-lg pt-4">
            Si aún no estás registrado, has click acá
          </p>
          <div className="pt-4 underline text-light-purple font-bold ">
            <Link to={"/registro"}>
              <button
                type="button"
                className="w-full uppercase py-2 px-4 h-10 text-dark-lila bg-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10"
              >
                Registrarse
              </button>
            </Link>
          </div>
        </ModalConsulta>
      )) ||
        (modalOpen && modalCont != 0 && (
          <ModalConsulta>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-10"
            >
              <img src={Close} alt="" />
            </button>

            <h1 className="text-2xl font-bold">Hola, {dataModal.nombre}!</h1>
            <img
              className="w-36 mx-auto"
              src={
                (dataModal.estado == "pendiente" && Neutro) ||
                (dataModal.estado == "separado" && Feliz) ||
                (dataModal.estado == "separado125" && Feliz) ||
                (dataModal.estado == "separado135" && Feliz) ||
                MuyFeliz
              }
              alt=""
            />
            <div className="bg-dark-lila text-slate-50 rounded-lg p-4 shadow-sm shadow-dark-lila">
              <p className="text-xl py-3">Mi progreso actual</p>
              <div className="w-full bg-slate-300 h-4 rounded-xl">
                <div
                  className="bg-gradient-to-r to-light-green from-light-purple h-4 rounded-xl"
                  style={
                    (dataModal.estado == "pendiente" && { width: "10%" }) ||
                    (dataModal.estado == "separado"  && { width: "50%" }) ||
                    (dataModal.estado == "separado125" && { width: "50%" }) ||
                    (dataModal.estado == "separado135" && { width: "50%" }) || {
                      width: "100%",
                    }
                  }
                ></div>
              </div>
              <p className="text-lg text-center pt-2">
                {(dataModal.estado == "pendiente" && "10%") ||
                  (dataModal.estado == "separado" && "50%") ||
                  (dataModal.estado == "separado125" && "50%") ||
                  (dataModal.estado == "separado135" && "50%") ||
                  "100%"}
              </p>
              <p className="text-sm font-bold">
                Estado:{" "}
                <span className="first-letter:uppercase">
                  {dataModal.estado == 'pendiente' && "pendiente" || dataModal.estado == "separado" && 'Separado' || dataModal.estado == "separado125" && 'Separado' || dataModal.estado == 'separado135' && "Separado" || "Completado"}
                </span>
              </p>
            </div>
            <p className="text-lg pt-4">
              {(dataModal.estado == "pendiente" &&
                "Tu cupo aún está pendiente, para poder separarlo haz el pago dando en el botón de abajo.") ||
                (dataModal.estado == "separado" && "Muy bien! ya has asegurado tu entrada al campamento, sólo falta completar el monto de tu pago y habrás completado todos los pasos" || dataModal.estado == "separado125" && "Muy bien! ya has asegurado tu entrada al campamento, sólo falta completar el monto de tu pago y habrás completado todos los pasos" || dataModal.estado == "separado135" &&
                  "Muy bien! ya has asegurado tu entrada al campamento, sólo falta completar el monto de tu pago y habrás completado todos los pasos") ||
                "Muchas gracias por completar el proceso, nos vemos en Febrero 2023"}
            </p>
            <div className="pt-4 underline text-light-purple font-bold ">
              {(dataModal.estado == "pendiente" && (
                <a
                  target={"_blank"}
                  href="https://wa.me/51981257046?text=Hola%20quiero%20continuar%20con%20el%20pago%20de%20mi%20cupo%20para%20el%20campamento%202023"
                >
                  Ir a pagar
                </a>
              )) ||
                ((dataModal.estado == "separado" || dataModal.estado == "separado125" || dataModal.estado == "separado135") && (
                  <a
                    target={"_blank"}
                    href="https://wa.me/51981257046?text=Hola%20quiero%20continuar%20con%20el%20pago%20de%20mi%20cupo%20para%20el%20campamento%202023"
                  >
                    Completar mi pago
                  </a>
                )) || (
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="w-full uppercase py-2 px-4 h-10 text-dark-lila bg-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10"
                  >
                    Aceptar
                  </button>
                )}
            </div>
          </ModalConsulta>
        ))}
      <div className="py-36 lg:flex lg:justify-between ">
        <div className="lg:max-w-lg">
          <h1 className="text-slate-50 text-4xl font-bold lg:text-5xl">
            Gracias por haberte registrado
          </h1>
          <p className="text-slate-50 text-xl py-8 lg:font-bold lg:text-2xl">
            Puedes seguir el estado de tu cupo acá, solo coloca tu DNI.
          </p>
          <img
            src={Joven}
            alt=""
            className="hidden lg:block lg:max-w-lg h-auto  lg:rounded-lg lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"
          />
        </div>
        <div className="lg:w-3/6 lg:pl-4">
          <div className="relative shadow-sm shadow-slate-50/10 rounded-2xl bg-dark-lila/70">
            {isLoad && (
              <div className="absolute w-full h-full z-50 bg-dark-lila/50 rounded-2xl">
                <img
                  src={Load}
                  alt=""
                  className=" absolute animate-spin left-[calc(50%-24px)] top-1/2"
                />
              </div>
            )}
            <div className="py-2 px-4 rounded-t-2xl bg-dark-lila/60">
              <h2 className="text-slate-50 text-xl font-light text-center">
                CONSULTAR MI CUPO
              </h2>
            </div>
            <div className="p-4">
              <div className="w-full">
                <img
                  src={JoinImage}
                  alt="join register"
                  className="w-40 mx-auto"
                />
              </div>
              <form ref={form} onSubmit={consultaCupo}>
                {/* <Input
                  labelName="Correo"
                  placeholder="example@emael.com"
                  type="email"
                  isRequired="required"
                  name="user_email"
                /> */}
                <Input
                  labelName="DNI"
                  placeholder="123456789"
                  type="text"
                  isRequired="required"
                  name="user_dni"
                />
                <button
                  type="submit"
                  className="w-full uppercase py-2 px-4 h-10 text-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10"
                >
                  Consultar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
