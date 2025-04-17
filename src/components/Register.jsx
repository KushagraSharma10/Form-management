import React, { useState } from "react";
import Details from "./Details";

const Register = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [Dob, setDob] = useState();
    const [mobile, setMobile] = useState();
    const [submitted, setSubmitted] = useState(false);

    const handleClick = () => {
        const DobYear = new Date(Dob).getFullYear();
        const currentYear = new Date().getFullYear();
        const calculatedAge = currentYear - DobYear;
    
        setAge(calculatedAge);
        setSubmitted(true);
    };

    return (
        <div className="flex items-center gap-10">
            <div className="w-[30vw] bg-white px-10 py-8 rounded-md flex flex-col gap-[3vw] ">
                <h1 className="text-center text-[1.4em] font-semibold">
                    Registration form
                </h1>
                <div className="inputs flex flex-col gap-7">
                    <input
                        className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw]"
                        type="text"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    {/* <input
                        className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw]"
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    /> */}
                    <input
                        className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw]"
                        type="date"
                        placeholder="DOB"
                        value={Dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <input
                        className="border-1 w-full rounded-md p-2 outline-none border-blue-300 text-[1vw] "
                        type="text"
                        placeholder="Mobile No."
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                    />
                    <input
                        className="w-full bg-blue-500 text-center px-2 py-3 rounded-md cursor-pointer text-white font-semibold"
                        type="submit"
                        onClick={handleClick}
                    />
                </div>
            </div>
            <Details name = {name} age ={age} mobile={mobile} dob={Dob} submitted={submitted} />
        </div> 
    );
};

export default Register;
