import React from "react";

const Register = () => {
  return (
    <div className="w-[30vw] bg-white px-10 py-8 rounded-md flex flex-col gap-[3vw] ">
      <h1 className="text-center text-[1.4em] font-semibold">
        Registration form
      </h1>
      <div className="inputs flex flex-col gap-7">
        <input className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw]" type="text" placeholder="Full Name" /> 
        <input className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw]" type="number" placeholder="Age" /> 
        <input className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw]" type="date" placeholder="DOB" /> 
        <input className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw] " type="text" placeholder="Mobile No." />
        <input className="w-full bg-blue-500 text-center px-2 py-3 rounded-md cursor-pointer text-white font-semibold" type="submit" />
      </div>
      
    </div>
  );
};

export default Register;
