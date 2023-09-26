import React from 'react'


// const clickFunction = () => {
//     console.log("Button is clicked")
// }

function clickFunction() {
    console.log("Button is clicked from functional based")
}

function Counterf() {
    return (
        <div>
            <button onClick={clickFunction}>Click here</button>
        </div>
    )
}

export default Counterf