import React, { Component } from 'react'

class UserGreetingTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        let message;
        if(this.state.isLoggedIn) {
            message = <div><h1>Welcome Uma</h1></div>
        } else {
            message = <div><h1>Welcome Guest</h1></div>
        }

        return message
    }
}

export default UserGreetingTwo
