import React, { useState } from 'react'

function ReactHook ()
{
    const [counter ,setCounter]=useState(100)
    function increaseCounter(){
        setCounter(counter+10);
    }
    function decreaseCounter(){
        setCounter(counter-10);
    }
  return (
    <div>
        <h2 style={{color:'white'}}>ReactHok</h2>
        <h1>Counter value={counter}</h1>
        <button onClick={increaseCounter} style={{margin:'5px'}}>increase countervalue</button>
        <button onClick={decreaseCounter}>Decrease value</button>
    </div>
  )
}
export default ReactHook
