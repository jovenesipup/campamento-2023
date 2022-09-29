import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import  Gracias  from "./pages/gracias";
import Registro from './pages/registro'
import Header from './components/header'
import Admin from './pages/admin';

function App() {
  return (
      <div className='App'>
        <Header></Header>
        <Routes>
          <Route path='/campamento-2023/' element={<Home/>}></Route>
          <Route path='/campamento-2023/gracias' element={<Gracias/>}></Route>
          <Route path='/campamento-2023/registro' element={<Registro/>}></Route>
          <Route path='/campamento-2023/admin' element={<Admin/>}></Route>

        </Routes>
      </div>
  )
}

export default App
