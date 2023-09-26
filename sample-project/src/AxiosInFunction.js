import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosInFunction() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
    }, [])

    return (
        <div>
            {
                data.map((row) => {
                    return (
                        <>
                            <p>{row.id}</p>
                            <p>{row.title}</p>
                            <p>{row.body}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default AxiosInFunction