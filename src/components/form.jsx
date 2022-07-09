import React, { useRef } from 'react'
import Input from './input'
import email from '@emailjs/browser'
import JoinImage from '../assets/img/join.svg'

export default function form() {
  const form = useRef(null)
    
  const sendEmail = async (e) => {
    e.preventDefault()
    const res = await email.sendForm('service_wrwpolm','template_170x46c',form.current,'TsO_9UCu7fG8j9NaG')
      try {
        console.log(res)
        alert("Mensaje enviado con exito")
        window.location.reload()
        
      } catch (error) {
        console.log(error)
      }
  }
    
  return (
    <div className='my-8 shadow-sm shadow-slate-50/10 rounded-2xl bg-dark-lila/70'>
        <div className='py-2 px-4 rounded-t-2xl bg-dark-lila/60'>
            <h2 className='text-slate-50 text-xl font-light text-center'>REGISTRO</h2>
        </div>
        <div className='p-4'>
          <div className='w-full'>
            <img src={JoinImage} alt="join register" className='w-40 mx-auto'/>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <Input labelName='Nombre' placeholder='John' type='text' isRequired='required' name='user_name'/>
            <Input labelName='Apellidos' placeholder='Doe' type='text' isRequired='required' name='user_lastname'/>
            <Input labelName='Correo' placeholder='example@mail.com' type='email' isRequired='required' name='user_email'/>
            <Input labelName='Numero de contacto' placeholder='123456789' type='number' isRequired='required' maxLength={9} name='user_number'/>
            <button type='submit' className='w-full uppercase py-2 px-4 h-10 text-light-green font-light rounded-2xl border border-light-green shadow shadow-slate-50/10'>Continuar</button>
          </form>
        </div>
    </div>
  )
}
