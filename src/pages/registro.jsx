import React from "react";
import Form from "../components/form";
import Joven from '../assets/img/joven.jpg'

export default function registro() {
  return (
    <div className="container mx-auto lg:px-16">
      <div className="py-36 lg:flex lg:justify-between ">
        <div className="lg:max-w-lg">
          <h1 className="text-slate-50 text-4xl font-bold lg:text-5xl">Muy bien! Estas muy cera</h1>
          <p className="text-slate-50 text-xl py-8 lg:font-bold lg:text-2xl">Solo tienes que rellenar el formulario y seguir los pasos.</p>
          <img src={Joven} alt="" className="hidden lg:block lg:max-w-lg h-auto  lg:rounded-lg lg:shadow-lg lg:shadow-light-green lg:border-4 lg:border-x-light-purple lg:border-y-light-green"/>
        </div>
        <div className="lg:w-3/6 lg:pl-4">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
