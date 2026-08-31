import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
function App() {
 
  let a=10
  let name="aarkesh"
  let roll="2400320100007"
  let branch="CSE"
  let college="ABES"
  return (
    <div>
      Hello 
      <ICard></ICard>
    </div>
  )
}

export default App
