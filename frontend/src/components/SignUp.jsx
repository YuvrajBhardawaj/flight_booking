import React, { useState } from 'react';
import axios from 'axios'
function SignUp() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const submitHandle = (e) => {
    e.preventDefault();
    axios.post('/api/signup',{name,email,password,phone})
    .then((res)=>alert(res.data.message))
    .catch((err)=>console.log(err))
  };

  return (
    <div>
      <div className='w-75 mx-auto mt-5 border border-primary p-4 rounded-5 bg-light bg-opacity-75'>
        <h1 className='text-center mb-4'>Sign Up</h1>
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fs-5 fw-bold">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="basic-addon1" required value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fs-5 fw-bold">Phone No</label>
            <input type="text" className="form-control" id="phone" aria-describedby="basic-addon1" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;