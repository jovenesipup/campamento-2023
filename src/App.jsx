import { useState } from 'react'
import Form from './components/form'
import Header from './components/header'
import Hero from './components/hero'
import Banner from './components/banner'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div className='font-sans backdrop-blur-3xl'>
      <Header></Header>
      <Hero></Hero>
      <Banner></Banner>
      <div className="container mx-auto">
        <Form/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
