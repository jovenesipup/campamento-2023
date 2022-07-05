import React from 'react'
import Logo from '../assets/img/logo.png'

export default function footer() {
  return (
    <footer className='bg-dark-lila/70'>
        <div className='container py-4'>
            <div className='w-32'>
                <img src={Logo} alt="logo" className=''/>
            </div>
            <div className=''>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
