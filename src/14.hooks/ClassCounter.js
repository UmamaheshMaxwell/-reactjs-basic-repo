import React, { Component } from 'react'

 class ClassCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }

     increment = () => {
         this.setState({
             count:  this.state.count + 1
         })
     }
    render() {
        return (
            <div className="container">
                <h1>Counter: {this.state.count}</h1>
                <button className="btn btn-primary"
                        onClick={this.increment}
                >Increment</button>
            </div>
        )
    }
}

export default ClassCounter
