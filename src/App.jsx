import { useState } from 'react'
import Form from './components/form'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <div className="container mx-auto">
        <Form/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
