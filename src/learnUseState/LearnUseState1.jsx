import React, { useState } from 'react'

const LearnUseState1 = () => {
    let [name,setName]=useState("Sujan");
    let [age,setAge]=useState(30);
  return (
    <div>
       <p>My name is {name}</p> 
       <button onClick={(e)=>{
        setName("Sampanna")
       }}>Change name</button>

       <p>I am {age} years old.</p>

       <button onClick={(e)=>{
        setAge(10)
       }}>Change age</button>


    </div>
  )
}

export default LearnUseState1