import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Registration = ({regdata}) => {
  const[name ,setName]=useState();
  const[email ,setEmail]=useState();
  const[password,setPassword]=useState();

  function RegisterUser(e){
    e.preventDefault()
    regdata={name,email,password}
    console.log(regdata)
  }
  return (
    <div><h2>Registration Page</h2>
    <form>
      <div class="form-group">
   <label for="exampleInputEmail1">Name</label>
    <input type="Name" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div class="form-group">
   <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"onClick={RegisterUser}>Registration</button>
</form>
{/* <h2>
  {name}
  {email}
  {password}
</h2> */}
    </div>
  )
}

export default Registration