import React from 'react'
import Happy from '../assets/img/happy.svg'

import  { Link } from 'react-router-dom'

export default function banner() {
  return (
    <div 
    className="container py-8 max-w-full flex flex-col justify-between bg-dark-lila lg:px-48" 
    >
        <div className='pb-4 flex flex-row justify-between'>
            <h2 className='pt-4 uppercase text-slate-50 text-2xl lg:text-5xl'>
                Campamento <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-light-purple to-light-green'>Nacional</span> <span className='block pt-2 text-light-green drop-shadow-md'>2023</span>
                <span className='text-xs italic'>#influenciaapostolica</span>
                <p className='hidden lg:block text-slate-200 text-sm mt-6'>Estás a un solo paso de vivir la experiencia</p>

            </h2>
            <div className='w-40 lg:w-60'>
                <img src={Happy} alt="happy" className='w-40 lg:w-60'/>
            </div>
        </div>
        <Link to='/registro'>
            <button className='py-2 px-4 h-10 w-full uppercase text-dark-lila font-light rounded-2xl border border-yellow bg-yellow shadow shadow-slate-50/10 lg:max-w-md'>
                Inscribete
            </button>
        </Link>
    </div>

  )
}
