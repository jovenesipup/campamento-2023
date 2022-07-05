import React from 'react'
import Logo from '../assets/img/logo.png'

export default function header() {
  return (
    <header className='bg-dark-lila/70'>
        <nav className='container w-full py-4 flex flex-row justify-between'>
            <div className='w-32'>
                <img src={Logo} alt="logo" className=''/>
            </div>
            <div className='self-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className='hidden'>
                <ul className=''>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
