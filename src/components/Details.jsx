import React from 'react'

const Details = () => {
  return (
    <div className='w-[30vw]  px-10 py-10 rounded-md bg-white flex flex-col gap-5'>
        <h1  className=" text-[1.4em] font-semibold">User Details</h1>
        <div className='user-detail text-start flex flex-col  gap-[2vw]'>
            <div>
                <h1>Name: </h1>
                <h1></h1>
            </div>
            <div>
                <h1>Age: </h1>
                <h1></h1>
            </div>
            <div>
                <h1>DOB: </h1>
                <h1></h1>
            </div>
            <div>
                <h1>Mobile: </h1>
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default Details