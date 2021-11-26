import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

       // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }

     changeMessage = () =>{
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* //First Approach */}
                <h2>Using Bind Method</h2>
                <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change</button> <br />
                {/* Second Approach */}
                <h2>Using fat Arrow</h2>
                <button className="btn btn-primary" onClick={()=>this.changeMessage()}>Change</button>
                 {/* Third Approach */}
                 <h2>Binding the event handler in the constructor</h2>
                 <button className="btn btn-primary" onClick={this.changeMessage}>Change</button>
                 {/* Fourth Approach */}
                 <h2>Changing our function to fat arrow function</h2>
                 <button className="btn btn-primary" onClick={this.changeMessage}>Change</button>
            </div>
        )
    }
}

export default EventBind
