import React, { useState } from 'react'

const LearnUseState4 = () => {
    let [show,setShow]=useState(true)
   
  return (
    <div>
        {show ? <p>Sampanna Sapkota</p>: null}
        <button onClick={(e)=>{
            setShow(true);
        }}>Show</button>
        <button onClick={(e)=>{
            setShow(false);
        }}>Hide</button>
    </div>
  )
}

export default LearnUseState4