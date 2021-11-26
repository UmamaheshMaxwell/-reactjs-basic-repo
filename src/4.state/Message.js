import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Uma',
             message: 'Welcome Uma'
        }
    }

    subscribe(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    

    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <h2>Message: {this.state.message}</h2>
                <button className="btn btn-primary" 
                        onClick={()=>this.subscribe()}
                >Subscribe</button>
            </div>
        )
    }
}

export default Message
