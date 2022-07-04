import React from 'react'
import Input from './input'

export default function form() {
  return (
    <div className='mt-8 rounded-2xl bg-slate-50'>
        <div className='py-2 px-4 rounded-t-2xl bg-gradient-to-r to-light-green via-light-purple from-light-purple'>
            <h2 className='text-slate-50 text-xl font-light'>Estás a un solo paso...</h2>
        </div>
        <div className='p-4'>
          <form>
            <Input labelName='Nombre' placeholder='John' type='text' isRequire={true}/>
            <Input labelName='Apellidos' placeholder='Doe' type='text' isRequire={true}/>
            <Input labelName='Correo' placeholder='example@mail.com' type='email' isRequire={true}/>
            <Input labelName='Numero de contacto' placeholder='123456789' type='number' isRequire={true}/>
            <button type='button' className='py-2 px-4 w-full text-slate-50 rounded-2xl bg-gradient-to-r to-light-green via-light-purple from-light-purple'>Enviar</button>
          </form>
        </div>
    </div>
  )
}
