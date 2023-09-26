import React, { Component } from "react"
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <>
                <h1> Header Component</h1 >
                <Link to="/Course">Click here to redirect to course</Link>
            </>
        )
    }
}

export default Header