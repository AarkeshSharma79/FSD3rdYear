import React from 'react'
import pic from '../images/images.jpg'

// function ICard(props) {
//       // let name="aarkesh"
//       // let roll="2400320100007"
//       // let branch="CSE"
//       // let college="ABES"
//   return (
//  <>
//     <div style={{border:'5px solid white',height:'250px',width:'250px'}}>
//       <img src={pic} height={50} width={50} style={{borderRadius:'50%',marginTop:'5px'}}></img>
//           <h2>Name:{props.name}</h2>
//           <h2>roll no:{props.roll}</h2>
//           <h2>branch:{props.branch}</h2>
//           <h2>college:{props.college}</h2>
//     </div>
    //<div>
function ICard({data}) {
  return (
 <>
    <div style={{border:'5px solid white',height:'250px',width:'250px'}}>
      <img src={pic} height={50} width={50} style={{borderRadius:'50%',marginTop:'5px'}}></img>
          <h2>Name:{data.name}</h2>
          <h2>roll no:{data.roll}</h2>
          <h2>branch:{data.branch}</h2>
          <h2>college:{data.college}</h2>
    </div>
 </>

  )
}

export default ICard