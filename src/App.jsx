import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import  Gracias  from "./pages/gracias";
import Registro from './pages/registro'
import Header from './components/header'
import Admin from './pages/admin';
import Footer from './components/footer';
import Galeria from './pages/galeria';
import ReactGA from 'react-ga';
// const TRACKING_ID = "G-X56F4K2BP4"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

function App() {
  return (
      <div className='App'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/gracias' element={<Gracias/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/galeria' element={<Galeria/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
  )
}

export default App
