import React from 'react'
import Logo from '../assets/img/logo.png'

export default function header() {
  return (
    <header className='bg-slate-200/80'>
        <nav className='py-4 px-8 flex justify-between'>
            <div className='w-24'>
                <img src={Logo} alt="logo" className=''/>
            </div>
            <div className=''>
                <ul className=''>

                </ul>
            </div>
        </nav>
    </header>
  )
}