import React, { Component } from 'react'

 class Counter extends Component {


    constructor(){
        super()
        
        this.state = {
            count: 0
        }
    }

    addCount(){
        this.setState({
            count: this.state.count + 1
        }, () =>{
            console.log(this.state.count)
        })
    }
    

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={()=>this.addCount()}>Add Count</button>
            </div>
        )
    }
}

export default Counter
