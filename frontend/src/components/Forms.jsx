import React from 'react'

function Forms() {
  return (
    <div className='w-75 container mt-4 border border-primary px-4 py-5 rounded-5 bg-light bg-opacity-75'>
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="name" className="form-label">Passenger Name</label>
        <input type="text" className="form-control" id="name"/>
      </div>
      <div className="col-md-4">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" className="form-control" id="age"/>
      </div>
      <div className="col-md-4">
        <label htmlFor="phone" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="phone"/>
      </div>
      <div className="col-md-4">
        <label htmlFor="aadhar" className="form-label">Passenger Name</label>
        <input type="text" className="form-control" id="aadhar"/>
      </div>
      <div className="col-md-4">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" className="form-control" id="age"/>
      </div>
      <div className="col-md-4">
        <label htmlFor="phone" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="phone"/>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip"/>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck"/>
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
    </div>
  )
}

export default Forms
