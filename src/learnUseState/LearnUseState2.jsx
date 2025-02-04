import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count, setCount] = useState(0)
    return (
        <div>
            <p>Count is {count}</p>

            <button onClick={(e) => {
                setCount(count + 1);
            }}>Increment Count</button>
            <br /><br />
            <button onClick={(e) => {
                setCount(count - 1);
            }}>Decrement Count</button>

        </div>
    )
}

export default LearnUseState2