import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
    const [flight,setFlights]=useState([])
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const submitHandle =async (e) => {
        e.preventDefault();
        await axios.post('/api/home',{from,to})
        .then((res)=>{
            if(res.data.length>0)
                setFlights(res.data)
        })
        .catch((err)=>console.log(err))
      };
      
  return (
    <>
    {
    flight.length>0?
    
    <table className='w-75 w-md-50 mx-auto bg-light opacity-75 mt-5 rounded-3'>
        <thead>
            <tr>
                <th>From</th>
                <th>To</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Fare</th>
            </tr>
        </thead>
        <tbody>
            {flight.map((v, i) => {
            return (
                <tr key={i}>
                    <td>{v.from}</td>
                    <td>{v.to}</td>
                    <td>{v.arrival}</td>
                    <td>{v.departure}</td>
                    <td>{v.fare}</td>
                    <td><Link to={`/booking/${v._id}/${v.fare}`}><button style={{ backgroundColor: 'orange', color: 'white' }} className='btn px-2 py-1'>Book</button></Link></td>
                </tr>
            );
            })}
        </tbody>
    </table>
    :
    <div className='container' onSubmit={submitHandle}>
      <div className='w-50 w-md-50 mx-auto mt-5 border border-primary px-4 py-5 rounded-5 bg-light bg-opacity-75'>
        <form>
            <div className="mb-3">
                <label htmlFor="From" className="form-label fs-5 fw-bold">From</label>
                <input type="text" className="form-control" id="From" aria-describedby="basic-addon1" value={from} required onChange={(e)=>setFrom(e.target.value.toLowerCase())}/>
            </div>
            <div className="mb-3">
                <label htmlFor="To" className="form-label fs-5 fw-bold">To</label>
                <input type="text" className="form-control" id="To" aria-describedby="basic-addon1" value={to} required onChange={(e)=>setTo(e.target.value.toLowerCase())}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submitHandle}>Search</button>
        </form>
      </div>
    </div>
    }
    </>
  )
}

export default Home
