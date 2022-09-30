import React, { useRef } from "react";
import Input from "./input";
import email from "@emailjs/browser";
import JoinImage from "../assets/img/join.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Load from "../assets/img/load.svg";
import { useState } from "react";

export default function form() {
  const form = useRef(null);
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState(false);

  const savePerson = (e) => {
    e.preventDefault();
    setIsLoad(true)
    validatedDni();
  };

  const validatedDni = async () => {
    const dni = form.current.querySelector("#user_dni").value;
    const res = await axios.get(
      `https://campamentoapi.pro/api/personas/dni/${dni}`
    );
    if (res.data.length < 1) {
      sendForm();
    } else {
      alert("El DNI ya se encuentra registrado");
      setIsLoad(false)
    }
  };

  const sendForm = async (e) => {
    const formEl = form.current;
    const formBody = {
      name: formEl.querySelector("#user_name").value,
      lastname: formEl.querySelector("#user_lastname").value,
      cellphone: formEl.querySelector("#user_number").value,
      email: formEl.querySelector("#user_email").value,
      iglesia: formEl.querySelector("#user_iglesia").value,
      pastor: formEl.querySelector("#user_pastor").value,
      origin: formEl.querySelector("#user_origen").value,
      dni: formEl.querySelector("#user_dni").value,
    };
    console.log(formBody);
    const res = await axios
      .post("https://campamentoapi.pro/api", {
        nombre: formBody.name,
        apellidos: formBody.lastname,
        telefono: formBody.cellphone,
        correo: formBody.email,
        iglesia: formBody.iglesia,
        pastor: formBody.pastor,
        origen: formBody.origin,
        estado: "pendiente",
        dni: formBody.dni,
      })
      .then(function (response) {
        console.log(response);
        alert("Registro Exitoso");
        sendEmail();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const sendEmail = async () => {
    const res = await email.sendForm(
      "service_wrwpolm",
      "template_170x46c",
      form.current,
      "TsO_9UCu7fG8j9NaG"
    );
    try {
      console.log(res);
      setIsLoad(false)
      navigate("/gracias");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          REGISTRO
        </h2>
      </div>
      <div className="p-4">
        <div className="w-full">
          <img src={JoinImage} alt="join register" className="w-40 mx-auto" />
        </div>
        <form ref={form} onSubmit={savePerson}>
          <Input
            labelName="Nombre"
            placeholder="John"
            type="text"
            isRequired="required"
            name="user_name"
          />
          <Input
            labelName="Apellidos"
            placeholder="Doe"
            type="text"
            isRequired="required"
            name="user_lastname"
          />
          <Input
            labelName="DNI"
            placeholder="12345678"
            type="text"
            isRequired="required"
            name="user_dni"
          />
          <Input
            labelName="Correo"
            placeholder="example@mail.com"
            type="email"
            isRequired="required"
            name="user_email"
          />
          <Input
            labelName="Numero de contacto"
            placeholder="123456789"
            type="number"
            isRequired="required"
            maxLength={9}
            name="user_number"
          />
          <Input
            labelName="Iglesia"
            placeholder="Nombre de tu iglesia"
            type="text"
            isRequired="required"
            maxLength={9}
            name="user_iglesia"
          />
          <Input
            labelName="Pastor"
            placeholder="Nombre de tu pastor"
            type="text"
            isRequired="required"
            maxLength={9}
            name="user_pastor"
          />
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-slate-50"
            >
              Origen
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm"></span>
              </div>
              <select
                className="block w-full pl-4 pr-12 py-2 rounded-2xl text-lg bg-dark-lila/60 text-slate-50 placeholder:text-slate-600"
                required
                name="user_origen"
                id="user_origen"
              >
                <option value="">Seleccione</option>
                <option value="Lima">Lima</option>
                <option value="Provincia">Provincia</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full uppercase py-2 px-4 h-10 text-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
