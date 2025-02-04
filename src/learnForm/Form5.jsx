import React, { useState } from 'react'

const Form5 = () => {
    let [name,setName]= useState("");
    let[email,setEmail]= useState("");
        let [password,setPassword]= useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted success")
        let data={
            Name:name,
            Email: email,
            Password: password
        } 
        console.log(data)
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form5