import React, { useRef } from 'react'
import Input from './input'
import email from '@emailjs/browser'

export default function form() {
  const form = useRef(null)
    
  const sendEmail = async (e) => {
    e.preventDefault()
    const res = await email.sendForm('service_wrwpolm','template_170x46c',form.current,'TsO_9UCu7fG8j9NaG')
      try {
        console.log(res)
        
      } catch (error) {
        console.log(error)
      }
  }
    
  return (
    <div className='my-8 shadow-sm shadow-dark-lila rounded-2xl bg-dark-lila/70'>
        <div className='py-2 px-4 rounded-t-2xl bg-gradient-to-r to-light-green from-light-purple'>
            <h2 className='text-slate-200 text-xl font-light'>Estás a un solo paso...</h2>
        </div>
        <div className='p-4'>
          <form ref={form} onSubmit={sendEmail}>
            <Input labelName='Nombre' placeholder='John' type='text' isRequired='required' name='user_name'/>
            <Input labelName='Apellidos' placeholder='Doe' type='text' isRequired='required' name='user_lastname'/>
            <Input labelName='Correo' placeholder='example@mail.com' type='email' isRequired='required' name='user_email'/>
            <Input labelName='Numero de contacto' placeholder='123456789' type='number' isRequired='required' maxLength={9} name='user_number'/>
            <button type='submit' className='py-2 px-12 w-full uppercase text-slate-50 rounded-2xl bg-gradient-to-r to-light-green from-light-purple'>Continuar</button>
          </form>
        </div>
    </div>
  )
}
