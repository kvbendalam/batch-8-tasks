import React from 'react'

function PrintName(props) {
    return (
        <div>Hello {props.name} belongs to {props.batch}</div>
    )
}

export default PrintName