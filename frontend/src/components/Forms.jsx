import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Forms() {
  const {id}=useParams()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [date,setDate] = useState('');
  return (
    <div className='w-75 container mt-4 border border-primary px-4 py-5 rounded-5 bg-light bg-opacity-75'>
    <form className="row g-3">
      <fieldset disabled>
      <div className="col-md-5">
        <label htmlFor="disabledTextInput" className="form-label">Flight ID</label>
        <input type="text" id="disabledTextInput" className="form-control" defaultValue={id}/>
      </div>
      </fieldset>
      <div className="col-md-4">
        <label htmlFor="name" className="form-label">Passenger Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" className="form-control" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="phone" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="aadhar" className="form-label">Aadhar no</label>
        <input type="text" className="form-control" id="aadhar" value={aadhar} onChange={(e)=>{setAadhar(e.target.value)}}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="date" className="form-label">Date</label>
        <input type="date" className="form-control" id="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip"/>
      </div>
      
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Confirm Booking</button>
      </div>
    </form>
    </div>
  )
}

export default Forms
