import React from 'react'
import Input from './input'

export default function form() {
  return (
    <div className='mt-8 shadow-sm shadow-slate-200 rounded-2xl bg-slate-50'>
        <div className='py-2 px-4 rounded-t-2xl bg-gradient-to-r to-light-green from-light-purple'>
            <h2 className='text-slate-200 text-xl font-light'>Estás a un solo paso...</h2>
        </div>
        <div className='p-4'>
          <form>
            <Input labelName='Nombre' placeholder='John' type='text' isRequired='required'/>
            <Input labelName='Apellidos' placeholder='Doe' type='text' isRequired='required'/>
            <Input labelName='Correo' placeholder='example@mail.com' type='email' isRequired='required'/>
            <Input labelName='Numero de contacto' placeholder='123456789' type='number' isRequired='required' maxLength={9}/>
            <button type='button' className='py-2 px-12 w-full uppercase text-slate-50 rounded-2xl bg-gradient-to-r to-light-green from-light-purple'>Continuar</button>
          </form>
        </div>
    </div>
  )
}
