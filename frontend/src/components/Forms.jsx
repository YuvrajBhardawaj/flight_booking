import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Forms() {
  const {id,rate}=useParams()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [userid,setUserId]=useState("65aa39703498d7a48f0e9d07")
  const [date,setDate] = useState('');
  const submitHandler=(e)=>{
      e.preventDefault()
      axios.post('/api/booking',{id,userid,name,age,phone,aadhar,date,rate})
      .then((res)=>alert(res.data.message))
      .catch((err)=>console.log(err))
  }
  return (
    <div className='w-75 container mt-4 border border-primary px-4 py-5 rounded-5 bg-light bg-opacity-75'>
    <form className="row g-3" onSubmit={submitHandler}>
      <fieldset className="col-md-6" disabled>
        <div>
          <label htmlFor="flightId" className="form-label">Flight ID</label>
          <input type="text" id="flightId" className="form-control" defaultValue={id}/>
        </div>
      </fieldset>
      <fieldset className='col-md-6' disabled >
        <div>
          <label htmlFor="userId" className="form-label">UserID</label>
          <input type="text" id="userId" className="form-control" defaultValue={"65aa39703498d7a48f0e9d07"}/>
        </div>
      </fieldset>
      <div className="col-md-4">
        <label htmlFor="name" className="form-label">Passenger Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
      </div>
      <div className="col-md-4">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" className="form-control" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}} required/>
      </div>
      <div className="col-md-4">
        <label htmlFor="phone" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>
      </div>
      <div className="col-md-4">
        <label htmlFor="aadhar" className="form-label">Aadhar no</label>
        <input type="text" className="form-control" id="aadhar" value={aadhar} onChange={(e)=>{setAadhar(e.target.value)}} required/>
      </div>
      <div className="col-md-4">
        <label htmlFor="date" className="form-label">Date</label>
        <input type="date" className="form-control" id="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required/>
      </div>
      <fieldset className='col-md-4' disabled >
        <div>
          <label htmlFor="rate" className="form-label">Rate</label>
          <input type="text" className="form-control" id="rate" defaultValue={rate}/>
        </div>
      </fieldset>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Confirm Booking</button>
      </div>
    </form>
    </div>
  )
}

export default Forms
