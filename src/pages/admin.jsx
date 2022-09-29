import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function admin() {
  const [listPerson, setListPerson] = useState([]);

  const getPersons = async () => {
    const response = await axios.get("http://localhost:3001/api/personas?size=100");
    setListPerson(response.data.docs);
  };

  useEffect(() => {
    getPersons();
  }, []);

  useEffect(() => {
    setListPerson(listPerson);
  }, [listPerson]);

  return (
    <div className="container mx-auto pt-24  h-screen">
      <div className="w-full h-full p-10 bg-slate-50/90 backdrop-blur-md rounded-lg">
        <h2 className="text-dark-lila text-2xl pb-4">Personas Registradas</h2>
        <table className="table-auto w-full rounded-lg text-dark-lila border-slate-500">
          <thead> 
            <tr className="text-left bg-slate-400">
              <th className="border border-slate-700">Nombre</th>
              <th className="border border-slate-700">Apellidos</th>
              <th className="border border-slate-700">Pastor</th>
              <th className="border border-slate-700">Iglesia</th>
              <th className="border border-slate-700">Correo</th>
              <th className="border border-slate-700">Telefono</th>
              <th className="border border-slate-700">Origen</th>
              <th className="border border-slate-700">Estado</th>
              <th className="border border-slate-700">DNI</th>
              <th className="border border-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listPerson.map((item, key) => {
              return (
                <tr className="text-dark-lila/90 py-4 w-fit my-4 px-4 rounded-md">
                  <td className="border border-slate-700 p-2">{item.nombre}</td>
                  <td className="border border-slate-700 p-2">
                    {item.apellidos}
                  </td>
                  <td className="border border-slate-700 p-2">{item.pastor}</td>
                  <td className="border border-slate-700 p-2">
                    {item.iglesia}
                  </td>
                  <td className="border border-slate-700 p-2">{item.correo}</td>
                  <td className="border border-slate-700 p-2">
                    {item.telefono}
                  </td>
                  <td className="border border-slate-700 p-2">{item.origen}</td>
                  <td className="border border-slate-700 p-2">
                    {item.estado}{" "}
                  </td>
                  <td className="border border-slate-700 p-2">
                    {item._id}
                  </td>
                  <td className="border border-slate-700 p-2">
                    <button className="border bg-light-green border-light-green mr-4 px-2 rounded-md">
                      Editar
                    </button>
                    <button className="border bg-light-purple border-light-purple px-2 rounded-md">Eliminar</button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
