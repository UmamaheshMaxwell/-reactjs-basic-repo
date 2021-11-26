import React, { Component } from 'react'

class UserGreetingFour extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

    render() {
        return (
            this.state.isLoggedIn && 
            <div><h1>Welcome Uma</h1></div> 
        )
    }
}

export default UserGreetingFour
