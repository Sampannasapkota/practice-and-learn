import React, { useState } from 'react'

const Form3 = () => {
    let [jobTitle,setJobTitle]= useState("");
        let [salary,setSalary]= useState("");
        let [location, setLocation]= useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted Success");
        

        let data={
            JobTitle: jobTitle,
            Salary: salary,
            Location: location
        }
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Job Title</label>
                <input type="text" onChange={(e)=>{setJobTitle(e.target.value)}} required />
            </div>
            <div>
                <label htmlFor="">Salary</label>
                <input type="number" onChange={(e)=>{setSalary(e.target.value)}} required/>
            </div>
            <div>
                <label htmlFor="">Location</label>
               <input type="text" onChange={(e)=>{setLocation(e.target.value)}} required/>
            </div>

            <div>
                <button>Submit</button>
            </div>
        </form>




    </div>
  )
}

export default Form3

/* 


Job    (jobTitle, salary, location)
Product (name, price, quantity)
user  (name, email, password)

*/