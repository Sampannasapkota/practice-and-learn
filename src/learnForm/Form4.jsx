import React, { useState } from 'react'

const Form4 = () => {
    let [productName, setProductName]= useState("");
    let [price,setPrice]= useState("");
    let [quantity, setQuantity]= useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Form of product submitted");
        let data={
            Name: productName,
            Price: price,
            Quantity: quantity
        }
        console.log(data);
    }
  return (
    <div>
        <form onClick={handleSubmit}>
            <div>
                <label htmlFor="">Product Name : </label>
                <input type="text" onChange={(e)=>{setProductName(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="">Price : </label>
                <input type="number" onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="">Quantity : </label>
                <input type="number" onChange={(e)=>{setQuantity(e.target.value)}} />
            </div>
            <div>
                <button>Submit Product</button>
            </div>


        </form>
    </div>
  )
}

export default Form4;

/* 
Product (name, price, quantity)
user  (name, email, password)

*/