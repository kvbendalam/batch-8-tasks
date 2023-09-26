import React, { useState, useEffect } from 'react'

function FetchInFunction() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(res => setData(res))
    }, [])

    return (
        <div>
            {data.map((row) => {
                return (
                    <>
                        <p>{row.id}</p>
                        <p>{row.title}</p>
                        <p>{row.body}</p>
                    </>
                )
            })}
        </div>
    )
}

export default FetchInFunction