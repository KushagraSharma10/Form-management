import React from "react";
import Details from "./Details";
import { Button, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Register = ({ handleInput,handleDateChange,handleSubmit,data }) => {
  return (
    <div className="flex items-center gap-10">
      <div className="w-[30vw] bg-white px-10 py-8 rounded-md flex flex-col gap-[3vw] ">
        <h1 className="text-center text-[1.4em] font-semibold">
          Registration form
        </h1>
        <div className="inputs flex flex-col gap-7">
          <TextField
            type="text"
            name="name"
            onChange={handleInput}
            label="Full Name" 
            variant="outlined"
            value={data.name}

          />
          <DatePicker
            name="Date Of Birth"
            // value={Dob}
            onChange={handleDateChange }
             label = "Date of Birth"
            variant="outlined"
            value={data.dob}
          />
          <TextField           
           type="number"
            
            onChange={handleInput}
            name="mobile"
            label = "Mobile No."
            variant="outlined"
            value={data.mobile}
            maxLength={10}
          />
          <Button
            // className="w-full bg-blue-500 text-center px-2 py-3 rounded-md cursor-pointer text-white font-semibold"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          > Submit</Button>
        </div>
      </div>
      {/* <Details name = {name} age ={age} mobile={mobile} dob={Dob} submitted={submitted} /> */}
    </div>
  );
};

export default Register;
