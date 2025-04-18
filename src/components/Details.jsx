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

import React, { useState } from 'react'

const Details = (props) => {

  const{name = "", Dob = "", mobile = ""} = props

   
  let age = 0;

  if(age == isNaN){
    age = "";
  }
  const DobYear = new Date(Dob).getFullYear();
  let DobMonth = new Date(Dob).getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - DobYear;
   
  if(age > currentYear){
    alert("Bhai tu to future se h tu")
  }

  if(DobMonth < 12 && age < currentYear){
    age = calculatedAge-1;
  }  
  
  console.log(DobMonth)

  return (
    <div className='w-[30vw] p-10 bg-white'>
      <div className='flex flex-col gap-10'>
      <div className='flex items-center gap-2'>
        <h1>hwy: </h1>
        <h1>{name}</h1>
      </div>
      <div className='flex items-center gap-2'>
        <h1 >Dob</h1>
        <h1>{Dob}</h1>
      </div>
      <div className='flex items-center gap-2'>
        <h1 >Age: </h1>
        <h1>{age}</h1>
      </div>
      <div className='flex items-center gap-2'>
        <h1 >Mobile</h1>
        <h1>{mobile}</h1>
      </div>
      </div>

      
    </div>
  )
}

export default Details