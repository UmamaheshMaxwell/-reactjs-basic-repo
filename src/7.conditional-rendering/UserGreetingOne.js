import React, { Component } from 'react'

class UserGreetingOne extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        if(this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Welcome Uma</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome Guest</h1>
                </div>
            )
        }
    }
}

export default UserGreetingOne
