import React, { useState } from 'react';

const Form = () => {
  const[name,setName]= useState("Taylor Swift")
  const[age,setAge]=useState(36)
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleAge=()=>{
    const newAge =age+1
    setAge(age +10)
  }
  return (
    <div>

     <input style={{marginBottom:"10px"}} value={name} type="text" onChange={(handleName)}/>
     <button onClick={handleAge}>Increment age</button>
     <p>Hello, {name}.You are {age}</p>
    </div>
  );
};

export default Form;
