import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosinClass extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => this.setState({ data: res.data }))
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((row) => {
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
}
