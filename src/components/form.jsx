import React from 'react'
import Input from './input'

export default function form() {
  return (
    <div className='mt-8 p-4 rounded-2xl bg-dark-lila'>
      <Input labelName='Nombre' placeholder='Nombre'/>
      <Input labelName='Apellidos' placeholder='Apellidos'/>
      <Input labelName='Correo' placeholder='example@mail.com'/>
      <Input labelName='Numero de contacto' placeholder='123456789'/>
    </div>
  )
}
