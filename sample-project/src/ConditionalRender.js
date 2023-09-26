import React, { Component } from 'react'
import Employee from './Employee'
import Sample from './Sample'

export default class ConditionalRender extends Component {

    constructor() {
        super()
        this.state = {
            age: 26
        }
    }

    render() {
        return (
            <div>
                {this.state.age > 24 ? (<Employee />) : (<Sample />)}
            </div>
        )
    }
}
