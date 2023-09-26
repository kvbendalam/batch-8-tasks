import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [counter, setCounter] = useState(0)

    //componentDidMount -> Everytime our component renders
    useEffect(() => {
        setCounter(5)
    })


    //componentDidUpdate 
    useEffect(() => {
        console.log("Counter value is changed")
    }, [counter])



    //componentWillUnmount
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hello")
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })

    //This will exceute only one time in a component.
    useEffect(() => {

    }, [])


    return (
        <div>{counter}</div>
    )
}

export default UseEffect
