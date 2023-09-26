import React, { Component } from 'react'

export default class FetechInClass extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(res => this.setState({ data: res }))
    }


    render() {
        return (
            <div>
                {this.state.data.map((row) => {
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
}
