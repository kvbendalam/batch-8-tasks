import React, { Component } from 'react'
// import Cart from "./Cart"
import "./Course.css"

export default class Course extends Component {

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <>
                <p className="first">{this.props.data}</p >
                <p style={{ backgroundColor: "red", fontSize: "48px", color: "black" }}>This example tag for inline styles</p>
            </>
        )
    }
}
