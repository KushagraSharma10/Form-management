import React, { useState } from 'react'
import Register from './components/Register'
import Details from './components/Details';


const App = () => {

  // const [name, setName] = useState("");
  // const [age, setAge] = useState();
  // const [Dob, setDob] = useState();
  // const [mobile, setMobile] = useState();
  // const [submitted, setSubmitted] = useState(false);
  

  const [data, setData] = useState({});

//   const handleClick = () => {
//     // const DobYear = new Date(Dob).getFullYear();
//     // const currentYear = new Date().getFullYear();
//     // const calculatedAge = currentYear - DobYear;

//     // setAge(calculatedAge);
//     setData(data)
//     console.log(data)
//     setSubmitted(true);
// };

  // const event = {setName, setDob, setMobile}

  const handleInput = (e) =>{
    setData({
      ...data,
    [e.target.name] : e.target.value,
    })
   
  }

  console.log(data)

  return (
    <div className='w-full flex items-center justify-center gap-10 h-screen rounded-md bg-zinc-900'>
        <Register handleInput = {handleInput}  />
        <Details {...data}/>
    </div>
  )
}

export default App