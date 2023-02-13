import React from "react";
import Joven from "../assets/img/joven.jpg";
import JoinImage from "../assets/img/consulta.svg";
import axios from "axios";
import Input from "../components/input";
import { useState, useRef, useEffect } from "react";
import ModalConsulta from "../components/modalConsulta";
import ModalBus from "../components/modalBus";
import { Link } from "react-router-dom";
import Load from "../assets/img/load.svg";
import Feliz from "../assets/img/feliz.svg";
import Neutro from "../assets/img/neutro.svg";
import Triste from "../assets/img/triste.svg";
import MuyFeliz from "../assets/img/muyfeliz.svg";
import Close from "../assets/img/close.svg";
import QRCode from "react-qr-code";

export default function consulta() {
  const [modalCont, setModalCont] = useState(0);
  const [dataModal, setDataModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [selectPoint, setSelectPoint] = useState(null);
  const [openBus, setOpenBus] = useState(true)
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

  const verOcultarMapa = (mapa, botonVer, botonOcultar, accion) => {
    if (accion == 1) {
      document.querySelector(`#${mapa}`).classList.add("block");
      document.querySelector(`#${mapa}`).classList.remove("hidden");
      document.querySelector(`#${botonVer}`).classList.add("hidden");
      document.querySelector(`#${botonVer}`).classList.remove("block");
      document.querySelector(`#${botonOcultar}`).classList.add("block");
      document.querySelector(`#${botonOcultar}`).classList.remove("hidden");
    } else {
      document.querySelector(`#${mapa}`).classList.add("hidden");
      document.querySelector(`#${mapa}`).classList.remove("block");
      document.querySelector(`#${botonVer}`).classList.add("block");
      document.querySelector(`#${botonVer}`).classList.remove("hidden");
      document.querySelector(`#${botonOcultar}`).classList.add("hidden");
      document.querySelector(`#${botonOcultar}`).classList.remove("block");
    }
  };

  const sendWeiPoint = async () => {
    setIsLoad(true);
    const person = {
      nombre: dataModal.nombre,
      apellidos: dataModal.apellidos,
      pastor: dataModal.pastor,
      iglesia: dataModal.iglesia,
      correo: dataModal.correo,
      telefono: dataModal.telefono,
      origen: dataModal.origen,
      estado: dataModal.estado,
      dni: dataModal.dni,
      ninos: dataModal.ninos,
      civil: dataModal.civil,
      talla: dataModal.talla,
      genero: dataModal.genero,
      edad: dataModal.edad,
      infante: dataModal.infante,
      comentario: dataModal.comentario,
      hospeda: dataModal.hospeda,
      weiPoint: selectPoint,
    };
    const res = await axios
      .put(`https://campamentoapi.pro/api/personas/${dataModal._id}`, person)
      .then((res) => {
        console.log(res);
        setIsLoad(false);
        alert("Enviado con Exito");
        setOpenBus(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoad(false);
      });
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
          <div>
            {dataModal.estado != "pendiente" && dataModal.estado != 'separado' && dataModal.estado != 'separado125' && dataModal.estado != 'separado135' && !dataModal.weiPoint && openBus && (
              <ModalBus>
                {isLoad && (
                  <div className="absolute top-0 left-0 w-full h-full z-50 bg-dark-lila/50 rounded-2xl">
                    <img
                      src={Load}
                      alt=""
                      className=" absolute animate-spin left-[calc(50%-24px)] top-1/2"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold">Hola, {dataModal.nombre}</h2>
                <h4 className="text-lg ">
                  A continuación indícanos el punto de salida donde vas a estar:
                </h4>
                <div className="pt-6">
                  <div
                    className={`relative cursor-pointer mb-4 border-solid ${
                      (selectPoint == "1" && "border-light-purple border-4") ||
                      "border-dark-lila/30 border-2"
                    } rounded-md p-2 shadow-lg`}
                    onClick={() => setSelectPoint("1")}
                  >
                    {selectPoint == "1" && (
                      <i class="material-symbols-rounded absolute right-1 text-light-purple font-bold">
                        task_alt
                      </i>
                    )}
                    <p className="text-lg font-bold">IGLESIA PAN DE VIDA </p>
                    <p className="text-sm">
                      Dirección: Av. Los Pinos N° 955, Independencia, Peru
                    </p>
                    <p className="text-sm w-full">
                      Referencia: Cerca a Plaza Norte y El aeropuerto
                    </p>
                    <button
                      id="boton1ver"
                      className="text-light-green block"
                      onClick={() =>
                        verOcultarMapa("mapa1", "boton1ver", "boton1ocultar", 1)
                      }
                    >
                      Ver mapa
                    </button>
                    <button
                      id="boton1ocultar"
                      className="text-light-green hidden"
                      onClick={() =>
                        verOcultarMapa("mapa1", "boton1ver", "boton1ocultar", 2)
                      }
                    >
                      Ocultar mapa
                    </button>
                    <iframe
                      className="hidden"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.91243368113425!2d-77.04705724001975!3d-12.002229278486189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf0677daeb5d%3A0xb060fcddb4b260b5!2sAv.%20los%20Pinos%20955%2C%20Independencia%2015333!5e0!3m2!1ses-419!2spe!4v1676248490192!5m2!1ses-419!2spe"
                      id="mapa1"
                      width="100%"
                      height="auto"
                      style={{
                        border: "1px solid #0a1a33",
                        borderRadius: "6px",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div
                    className={`relative cursor-pointer mb-4 border-solid ${
                      (selectPoint == "2" && "border-light-purple border-4") ||
                      "border-dark-lila/30 border-2"
                    } rounded-md p-2 shadow-lg`}
                    onClick={() => setSelectPoint("2")}
                  >
                    {selectPoint == "2" && (
                      <i class="material-symbols-rounded absolute right-1 text-light-purple font-bold">
                        task_alt
                      </i>
                    )}
                    <p className="text-lg font-bold">
                      IGLESIA JESUCRISTO ES LA VERDAD{" "}
                    </p>
                    <p className="text-sm">
                      Dirección: Avenida Los Virreyes 1526, Santa Anita 15011,
                      Lima, Peru
                    </p>
                    <p className="text-sm w-full">
                      Referencia: Cerca del Hostal Blue Star
                    </p>
                    <button
                      id="boton2ver"
                      className="text-light-green block"
                      onClick={() =>
                        verOcultarMapa("mapa2", "boton2ver", "boton2ocultar", 1)
                      }
                    >
                      Ver mapa
                    </button>
                    <button
                      id="boton2ocultar"
                      className="text-light-green hidden"
                      onClick={() =>
                        verOcultarMapa("mapa2", "boton2ver", "boton2ocultar", 2)
                      }
                    >
                      Ocultar mapa
                    </button>
                    <iframe
                      id="mapa2"
                      className="hidden"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.5872325223877!2d-76.94813823610964!3d-12.032286917248774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c426b9e69e35%3A0xd3b5f0ccf4f9b9e6!2sAv.%20Los%20Virreyes%201526%2C%20Santa%20Anita%2015011!5e0!3m2!1ses-419!2spe!4v1676249123052!5m2!1ses-419!2spe"
                      width="100%"
                      height="auto"
                      style={{
                        border: "1px solid #0a1a33",
                        borderRadius: "6px",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div
                    className={`relative cursor-pointer border-solid ${
                      (selectPoint == "3" && "border-light-purple border-4") ||
                      "border-dark-lila/30 border-2"
                    } rounded-md p-2 shadow-lg`}
                    onClick={() => setSelectPoint("3")}
                  >
                    {selectPoint == "3" && (
                      <i class="material-symbols-rounded absolute right-1 text-light-purple font-bold">
                        task_alt
                      </i>
                    )}
                    <p className="text-lg font-bold">IGLESIA IPUP MOTUPE </p>
                    <p className="text-sm">Dirección: Paradero 4 de Wise</p>
                    <p className="text-sm w-full">
                      Referencia: Paradero 4 de Motupe
                    </p>
                    <button
                      id="boton3ver"
                      className="text-light-green block"
                      onClick={() =>
                        verOcultarMapa("mapa3", "boton3ver", "boton3ocultar", 1)
                      }
                    >
                      Ver mapa
                    </button>
                    <button
                      id="boton3ocultar"
                      className="text-light-green hidden"
                      onClick={() =>
                        verOcultarMapa("mapa3", "boton3ver", "boton3ocultar", 2)
                      }
                    >
                      Ocultar mapa
                    </button>
                    <iframe
                      id="mapa3"
                      className="hidden"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107247.80956366679!2d-77.08849734255718!3d-11.933028654813358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105dbbd9ce6a2f7%3A0x3f128f4a59036e88!2sParadero%204%20de%20Motupe!5e0!3m2!1ses-419!2spe!4v1676251736254!5m2!1ses-419!2spe"
                      width="100%"
                      height="auto"
                      style={{
                        border: "1px solid #0a1a33",
                        borderRadius: "6px",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <button
                    type="button"
                    className="mt-8 w-full uppercase py-2 px-4 h-10 text-dark-lila bg-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10"
                    disabled={
                      selectPoint == "1" ||
                      selectPoint == "2" ||
                      selectPoint == "3"
                        ? false
                        : true
                    }
                    onClick={() => sendWeiPoint()}
                  >
                    Enviar
                  </button>
                </div>
              </ModalBus>
            )}

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
                      (dataModal.estado == "separado" && { width: "50%" }) ||
                      (dataModal.estado == "separado125" && { width: "50%" }) ||
                      (dataModal.estado == "separado135" && {
                        width: "50%",
                      }) || {
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
                    {(dataModal.estado == "pendiente" && "pendiente") ||
                      (dataModal.estado == "separado" && "Separado") ||
                      (dataModal.estado == "separado125" && "Separado") ||
                      (dataModal.estado == "separado135" && "Separado") ||
                      "Completado"}
                  </span>
                </p>
              </div>
              <p className="text-lg pt-4">
                {(dataModal.estado == "pendiente" &&
                  "Tu cupo aún está pendiente, para poder separarlo haz el pago dando en el botón de abajo.") ||
                  (dataModal.estado == "separado" &&
                    "Muy bien! ya has asegurado tu entrada al campamento, sólo falta completar el monto de tu pago y habrás completado todos los pasos") ||
                  (dataModal.estado == "separado125" &&
                    "Muy bien! ya has asegurado tu entrada al campamento, sólo falta completar el monto de tu pago y habrás completado todos los pasos") ||
                  (dataModal.estado == "separado135" &&
                    "Muy bien! ya has asegurado tu entrada al campamento, sólo falta completar el monto de tu pago y habrás completado todos los pasos") ||
                  "Muchas gracias por completar el proceso, nos vemos en Febrero 2023"}
              </p>
              <QRCode
                size={256}
                style={{
                  height: "auto",
                  maxWidth: "200px",
                  width: "200px",
                  margin: "0 auto",
                  marginTop: "10px",
                }}
                value={dataModal.dni}
                viewBox={`0 0 256 256`}
                fgColor={"#0a1a33"}
              />

              <div className="pt-4 underline text-light-purple font-bold ">
                {(dataModal.estado == "pendiente" && (
                  <a
                    target={"_blank"}
                    href="https://wa.me/51981257046?text=Hola%20quiero%20continuar%20con%20el%20pago%20de%20mi%20cupo%20para%20el%20campamento%202023"
                  >
                    Ir a pagar
                  </a>
                )) ||
                  ((dataModal.estado == "separado" ||
                    dataModal.estado == "separado125" ||
                    dataModal.estado == "separado135") && (
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
          </div>
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
              <h2 className="text-yellow text-2xl font-bold text-center">
                CONSULTAR MI CUPO Y PUNTO DE PARTIDA
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
                  className="w-full uppercase py-2 px-4 h-10 text-dark-lila font-light rounded-2xl border border-yellow bg-yellow shadow shadow-slate-50/10"
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
