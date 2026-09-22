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
function App() {
  return (
    <div>
        {/* <ICard></ICard> */}
        {/* <Gallery></Gallery> */}
        {/* <ReactHook/> */}
        {/* <Imagemanipulation/> */}
        <UseEffect/>
    </div>
  )
}

export default App
