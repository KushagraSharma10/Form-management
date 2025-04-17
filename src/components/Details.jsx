// import React from 'react'

// const Details = (props) => {
//     const {name, age, dob,mobile, submitted} = props;

//     const fields = [
//         { label: "Name", value: name },
//         { label: "Age", value: age },
//         { label: "DOB", value: dob },
//         { label: "Mobile", value: mobile },
//       ];

//   return (
//     <div className='w-[30vw]  px-10 py-5 rounded-md bg-white flex flex-col gap-5'>
//         <h1  className=" text-[1.4em] font-semibold">User Details</h1>
//         <div className='user-detail text-start flex flex-col  gap-[2vw]'>
//         {fields.map((field, index) => (
//           <div key={index} className="flex items-center gap-3">
//             <h1>{field.label}:</h1>
//             <h1>{submitted ? field.value : ""}</h1>
//           </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Details

import React from 'react'

const Details = (props) => {

  const{name = "", Dob = "", mobile = ""} = props

  return (
    <div className='w-[30vw] p-10 h-[20vw] bg-white'>
      <div className='flex flex-col gap-10'>
      <div className='flex items-center gap-2'>
        <h1>hwy: </h1>
        <h1>{name}</h1>
      </div>
      <div>
        <h1>Dob</h1>
        <h1>{Dob}</h1>
      </div>
      <div>
        <h1>Mobile</h1>
        <h1>{mobile}</h1>
      </div>
      </div>

      
    </div>
  )
}

export default Details