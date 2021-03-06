import React from 'react'
import Happy from '../assets/img/happy.svg'

export default function banner() {
  return (
    <div 
    className="container py-8 max-w-full flex flex-col justify-between bg-dark-lila/80" 
    >
        <div className='pb-4 flex flex-row justify-between'>
            <h2 className='pt-4 uppercase text-slate-50 text-2xl'>
                Campamento <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-light-purple to-light-green'>Nacional</span> <span className='block pt-2 text-light-green drop-shadow-md'>2023</span>
            </h2>
            <div className='w-40'>
                <img src={Happy} alt="happy" className='w-40'/>
            </div>
        </div>
        <button className='py-2 px-4 h-10 uppercase text-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10'>
            Inscribete
        </button>
    </div>

  )
}
