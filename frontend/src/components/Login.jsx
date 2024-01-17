import React from 'react';

function Login() {
  return (
    <div className='container'>
      <div className='w-75 w-md-50 mx-auto mt-5 border border-primary px-4 py-5 rounded-5 bg-light bg-opacity-75'>
        <h1 className='text-center'>Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
