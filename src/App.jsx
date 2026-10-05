import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
import Gallery from './component/Gallery'
import ReactHook from './component/ReactHook'
import Imagemanipulation from './component/Imagemanipulation'
import UseEffect from './component/UseEffectComponent'
import UseEffectComponent from './component/UseEffectComponent'
import Login from './component/Login'
import Registratiion from './component/Registratiion'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
        {/* <ICard></ICard> */}
        {/* <Gallery></Gallery> */}
        {/* <ReactHook/> */}
        {/* <Imagemanipulation/> */}
        {/* <UseEffectComponent/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Register' element={<Registratiion/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
