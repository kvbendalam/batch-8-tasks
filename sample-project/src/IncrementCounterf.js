import React, { useState } from 'react'

function IncrementCounterf() {

    const [counter, setCounter] = useState(0)


    const updateCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>IncrementCounterf</h1>
            <p>{counter}</p>
            <button onClick={updateCounter}>Click here to update counter</button>
        </div>
    )
}

export default IncrementCounterf