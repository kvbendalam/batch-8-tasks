import React, { Component } from 'react'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        //console.log(event)
        this.setState({ username: event.target.value })
        // console.log(event.target.value);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
        // console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.username);
        console.log(this.state.password);
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.username} onChange={this.handleUserChange} />
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}
