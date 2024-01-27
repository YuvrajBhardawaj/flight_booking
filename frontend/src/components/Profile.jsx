import React from 'react'

function Profile() {
  return (
    <div className='w-75 mx-auto mt-5 border border-primary p-4 rounded-5 bg-light bg-opacity-50'>
        <div className='row'>
            <div className="col-12">
                <div className="d-flex align-items-center justify-content-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={100}><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                    <div className='d-flex flex-column '>
                        <div className='px-4 fs-4 fw-medium '>
                            Name : Yuvraj bhardawaj
                        </div>
                        <div className='px-4 fs-4 fw-medium'>
                            Email : 123@gmail.com
                        </div>
                    </div>
                </div>
                <hr className=''/>
            </div>
            <div className="col-4">Aadhar: </div>
            <div className="col-4">Phone: </div>
            <div className="col-4">Password: </div>
        </div>
    </div>
  )
}

export default Profile
