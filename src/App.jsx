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
import Registration from './component/Registration'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {

  const[data,setData]=useState()
  return (
    <div>
        {/* <ICard></ICard> */}
        {/* <Gallery></Gallery> */}
        {/* <ReactHook/> */}
        {/* <Imagemanipulation/> */}
        {/* <UseEffectComponent/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Register' element={<Registration regdata={setData}/>}></Route>
          </Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
      <h2>
      {JSON.stringify(data)}
      </h2>
    </div>
  )
}

export default App
