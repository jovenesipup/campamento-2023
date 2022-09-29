import React from 'react'
import { useRef } from 'react'
import Logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function header() {

    const menuMobile = useRef(null)

    const handleMenu = (togle) =>{
        if(togle){
            menuMobile.current.classList.remove("hidden")
            menuMobile.current.classList.add("absolute")
        }else{
            menuMobile.current.classList.add("hidden")
            menuMobile.current.classList.remove("absolute")
        }
    }
  return (
    <header className='bg-dark-lila/90 fixed z-10 w-full backdrop-blur-md'>
        <nav className='container w-full py-4 flex flex-row justify-between'>
            <div className='w-32'>
                <Link to='/campamento-2023/'>
                <img src={Logo} alt="logo" className=''/>
                </Link>
            </div>
            <div className='self-center cursor-pointer' onClick={() => handleMenu(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div ref={menuMobile} className='hidden bg-dark-lila/90 w-full left-0 backdrop-blur-md top-0 p-8 h-screen text-xl z-50 text-slate-50'>
            <svg onClick={() => handleMenu(false)} xmlns="http://www.w3.org/2000/svg" className='absolute text-slate-50 right-0 mr-6 cursor-pointer' width="48" height="48">
                <path fill='#f8fafc' d="M24 26.1L13.5 36.6q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05L21.9 24 11.4 13.5q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L24 21.9l10.5-10.5q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05L26.1 24l10.5 10.5q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45-.6 0-1.05-.45z"></path>
            </svg>
                <ul className=''>
                    <li className='pb-5 flex items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <path fill='#f8fafc' d="M11.3 40q-1.4 0-2.35-.95Q8 38.1 8 36.7q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95zm0-12.7q-1.4 0-2.35-.95Q8 25.4 8 24q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95zm0-12.7q-1.4 0-2.35-.95Q8 12.7 8 11.3q0-1.4.95-2.35Q9.9 8 11.3 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95zM24 27.3q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35zm0-12.7q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q22.6 8 24 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95zM22.75 40q-.3 0-.525-.225Q22 39.55 22 39.25v-2.2q0-.1.2-.5L34.15 24.6l3.25 3.25L25.45 39.8q-.1.1-.5.2zM36.7 14.6q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q35.3 8 36.7 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95zm2 11.95l-3.25-3.25 1.25-1.25q.4-.4 1-.425.6-.025 1 .375l1.3 1.3q.4.4.375 1-.025.6-.425 1z"></path>
                    </svg>Registro</li>
                    <li className='flex items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <path fill='#f8fafc' d="M18.75 29.15H35.3q.45 0 .675-.4.225-.4-.075-.8l-4.85-6.55q-.25-.3-.6-.3t-.6.3l-4.55 5.95-2.8-3.6q-.25-.3-.6-.275-.35.025-.6.325l-3.15 4.15q-.3.4-.1.8.2.4.7.4zM13 38q-1.2 0-2.1-.9-.9-.9-.9-2.1V7q0-1.2.9-2.1.9-.9 2.1-.9h28q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9zm0-3h28V7H13v28zm-6 9q-1.2 0-2.1-.9Q4 42.2 4 41V11.5q0-.65.425-1.075Q4.85 10 5.5 10q.65 0 1.075.425Q7 10.85 7 11.5V41h29.5q.65 0 1.075.425Q38 41.85 38 42.5q0 .65-.425 1.075Q37.15 44 36.5 44zm6-37v28V7z"></path>
                    </svg>Galeria</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
