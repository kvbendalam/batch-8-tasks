import React, { Component } from 'react'

export default class Lifecycle1 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Krishna"
        }
    }

    componentDidMount() {
        // we can make api calls here and get the data.
        console.log("This is component did mount method")
    }

    render() {
        return (
            <div>This is render method </div>
        )
    }
}
