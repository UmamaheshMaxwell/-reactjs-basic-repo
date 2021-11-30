import React, { Component } from 'react'

 class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('constructor of child is called !!!')
    }

    static getDerivedStateFromProps(props, state) {
        console.log(' getDerivedStateFromProps from child is called !!!')
        return null;
    }
    

    render() {
        console.log('render from child is called !!!')
        return (
            <div>
               <h1>Life Cycle of Child</h1>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount from child is called !!!')
    }
}

export default LifeCycleChild
