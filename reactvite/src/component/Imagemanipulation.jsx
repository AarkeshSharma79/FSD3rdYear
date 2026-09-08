import React, { useState } from 'react'
import pic from '../images/cat.png'
const Imagemanipulation = () => {
    const[height ,setHeight]=useState(200);
    const[width,setWidth]=useState(200);
    const[red,setRed]=useState(20)
    const[green,setGreen]=useState(200)
    const[blue,setBlue]=useState(140)
    const[angle,setAngle]=useState(0)
    const[margin,setMargin]=useState(10)

    function enhanceheight(){
        setHeight(height+10)
    }
    function enhancewidth(){
        setWidth(width+10)
    }

    function denhanceheight(){
        setHeight(height-10)
    }
    function denhancewidth(){
        setWidth(width-10)
    }
    function ChangebgColor(){
        setRed(Math.random()*255)
        setGreen(Math.random()*255)
        setBlue(Math.random()*255)
    }
    function rotateImage(){
        setAngle(angle+25)
    }
    function MarginLeft(){
        setMargin(margin+10)
    }
    function MarginRight(){
        
    }
  return (
    <div style={{color:'white',backgroundColor:'skyblue'}}>Imagemanipulation
        <div style={{border:'2px solid red',height:'500px',width:'300x'}}>
            <img src={pic} height={height} width={width} style={{background:`rgb(${red},${green},${blue})`,transform:`rotate(${angle}deg)`,marginLeft:`${margin}px`}}></img>
            <div>
                <h2>Image height:{height}</h2>
                <h2>Image width: {width}</h2>
                <h2>Color Code :{red},{green},{blue}</h2>
            </div>
        </div>
        <div style={{border:'2px solid red',margin:'20px'}}>
            <button onClick={enhanceheight}style={{margin:'20px'}}>enhanceheight</button>
            <button onClick={enhancewidth}>enhancewidth</button>
            <button onClick={denhanceheight} style={{margin:'20px'}}>denhanceheight</button>
            <button onClick={denhancewidth}>denhancewidth</button>
            <br></br>
            <button onClick={ChangebgColor} style={{margin:'20px'}}>Changebg</button>
            <button onClick={rotateImage} style={{margin:'20px'}}>RotateImage</button>
            <br></br>
            <button onClick={MarginLeft}>MarginLeft</button>
        </div>
    </div>
  )
}

export default Imagemanipulation