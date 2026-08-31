import React from 'react'
import pic from '../images/images.jpg'

function ICard() {
      let name="aarkesh"
      let roll="2400320100007"
      let branch="CSE"
      let college="ABES"
  return (
 <>
    <div style={{border:'5px solid white',height:'250px',width:'250px'}}>
      <img src={pic} height={50} width={50} style={{borderRadius:'50%',marginTop:'5px'}}></img>
          <h2>Name={name}</h2>
          <h2>roll no={roll}</h2>
          <h2>branch={branch}</h2>
          <h2>college={college}</h2>
    </div>
    <div>

    </div>
 </>

  )
}

export default ICard