import React, { useState } from 'react'

const LearnUseState = () => {

    let [address,setAddress]= useState("ktm");
    let[name,setName]= useState("Sampanna");
    let[surname, setSurname]= useState("Sapkota");
    let[age, setAge]= useState(30);
    console.log("Hello console sampanna")
  return (
    <div>
        <p>
            I live in {address}
        </p>
        <p>
            My name is {name} {surname};
        </p>
        <p>
            I'm {age} years old;
        </p>
        <button onClick={(e)=>{
            console.log("Button is clicked")
        }}>Click me</button>
    </div>
  )
}

export default LearnUseState;