import { useState } from 'react'
import Form from './components/form'
import Header from './components/header'
import './App.css'

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Form/>
      </div>
    </div>
  )
}

export default App
