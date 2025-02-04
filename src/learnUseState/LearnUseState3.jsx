import React, { useState } from 'react'

const LearnUseState3 = () => {
    let[isMarried, setIsMarried]= useState(false)
  return (
    <div>
        <p>Married status is {isMarried ===true ? "yes": "no"}</p>



    </div>
  )
}

export default LearnUseState3