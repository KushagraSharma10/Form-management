import React, { useState } from 'react'
import Register from './components/Register'
import Details from './components/Details';
import UserTable from './components/UserTable';


const App = () => {

  // const [name, setName] = useState("");
  // const [age, setAge] = useState();
  // const [Dob, setDob] = useState();
  // const [mobile, setMobile] = useState();
  // const [submitted, setSubmitted] = useState(false);
  

  const [data, setData] = useState({});
  const [userList, setUserList] = useState([]);


  const handleInput = (e) =>{
    setData({
      ...data,
    [e.target.name] : e.target.value,
    })
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.dob && data.mobile) {
      setUserList([...userList, data]); // existing + new user
      setData({}); // reset karne ke liye form data
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = date?.toLocaleDateString("en-US");
    setData(prev => ({
      ...prev,
      dob: formattedDate
    }));
  };

  console.log(userList)
  // console.log(data)

  return (
    <div className='w-full flex items-center px-10 gap-10 h-screen rounded-md bg-zinc-300'>
        <Register data = {data} handleInput = {handleInput} handleDateChange = {handleDateChange} handleSubmit={handleSubmit}  />

        <UserTable  users={userList} />
    </div>
  )
}

export default App