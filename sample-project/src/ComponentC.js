import React, { useContext } from 'react'
import { Context } from './CompnentA'

function ComponentC() {
    const con = useContext(Context)

    return (
        <div>
            ComponentC
            {con}
        </div>
    )
}

export default ComponentC