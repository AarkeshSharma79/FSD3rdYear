import React from 'react'
import ICard from './ICard'

function Gallery() {
    // const student={
    //     name:"Sonu",
    //     roll:"90",
    //     branch:"CSE-AI",
    //     college:"ABES"
    //   }

    const student = [
  {
    name: "Sonu",
    roll: "90",
    branch: "CSE-AI",
    college: "ABES"
  },
  {
    name: "Rahul",
    roll: "91",
    branch: "CSE",
    college: "ABES"
  },
  {
    name: "Aman",
    roll: "92",
    branch: "CSE-AI",
    college: "ABES"
  },
  {
    name: "Riya",
    roll: "93",
    branch: "CSE-DS",
    college: "ABES"
  },
  {
    name: "Priya",
    roll: "94",
    branch: "IT",
    college: "ABES"
  },
  {
    name: "Arjun",
    roll: "95",
    branch: "CSE",
    college: "ABES"
  },
  {
    name: "Neha",
    roll: "96",
    branch: "CSE-AI",
    college: "ABES"
  },
  {
    name: "Karan",
    roll: "97",
    branch: "ECE",
    college: "ABES"
  },
  {
    name: "Simran",
    roll: "98",
    branch: "CSE-DS",
    college: "ABES"
  },
  {
    name: "Vikas",
    roll: "99",
    branch: "CSE-AI",
    college: "ABES"
  }
];
  return (
    <div style={{border:'2px solid red',display:'flex'}}>
        {/* <ICard name="Ram" roll="123" branch="CSE" college="ABES"></ICard>
        <ICard name="Mohan" roll="124" branch="CSE" college="ABES"></ICard>
        <ICard name="Shyam" roll="125" branch="CSE" college="ABES"></ICard>
        <ICard name="Krishna" roll="125" branch="CSE" college="ABES"></ICard> */}
        {/* <ICard data={student}></ICard> */}
        {student.map((ele)=>(
          <div>
            <ICard data={ele}></ICard>
          </div>
        ))}
    </div>
  )
}

export default Gallery