import React from "react";
import { useRef } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function header() {
  const menuMobile = useRef(null);

  const handleMenu = (togle) => {
    if (togle) {
      menuMobile.current.classList.remove("hidden");
      menuMobile.current.classList.add("absolute");
    } else {
      menuMobile.current.classList.add("hidden");
      menuMobile.current.classList.remove("absolute");
    }
  };
  return (
    <header className="bg-dark-lila/90 fixed z-10 w-full backdrop-blur-md">
      <nav className="container w-full py-4 flex flex-row justify-between">
        <div className="w-32">
          <Link to="/">
            <img src={Logo} alt="logo" className="" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row text-slate-50 text-xl">
            <Link to="/">
              <li className="ml-6 cursor-pointer hover:border-b-2 w-fit border-slate-50">
                Inicio
              </li>
            </Link>
            <Link to="/consulta">
              <li className="ml-6 cursor-pointer hover:border-b-2 w-fit border-slate-50">
                Consultar mi cupo
              </li>
            </Link>
            <Link to="/registro">
              <li className="ml-6 cursor-pointer hover:border-b-2 w-fit border-slate-50">
                Registro
              </li>
            </Link>
            {/* <Link to="/galeria">
              <li className="ml-6 cursor-pointer hover:border-b-2 w-fit border-slate-50">
                Galeria
              </li>
            </Link> */}
          </ul>
        </div>
        <div
          className="md:hidden self-center cursor-pointer"
          onClick={() => handleMenu(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-slate-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          ref={menuMobile}
          className="hidden bg-dark-lila w-full left-0 backdrop-blur-md top-0 p-8 h-screen text-xl z-50 text-slate-50"
        >
          <svg
            onClick={() => handleMenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute text-slate-50 right-0 mr-6 cursor-pointer"
            width="48"
            height="48"
          >
            <path
              fill="#f8fafc"
              d="M24 26.1L13.5 36.6q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05L21.9 24 11.4 13.5q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L24 21.9l10.5-10.5q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05L26.1 24l10.5 10.5q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45-.6 0-1.05-.45z"
            ></path>
          </svg>
          <ul className="pt-10">
            <Link to="/" onClick={() => handleMenu(false)}>
              <li className="mb-8 flex items-center cursor-pointer border-b-2 w-fit border-slate-50">
                Inicio
              </li>
            </Link>
            <Link to="/consulta" onClick={() => handleMenu(false)}>
              <li className="mb-8 flex items-center cursor-pointer border-b-2 w-fit border-slate-50">
                Consultar mi cupo
              </li>
            </Link>
            <Link to="/registro" onClick={() => handleMenu(false)}>
              <li className="mb-8 flex items-center cursor-pointer border-b-2 w-fit border-slate-50">
                Registro
              </li>
            </Link>
            {/* <Link to="/galeria" onClick={() => handleMenu(false)}>
              <li className="mb-8 flex items-center cursor-pointer border-b-2 w-fit border-slate-50">
                Galeria
              </li>
            </Link> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
