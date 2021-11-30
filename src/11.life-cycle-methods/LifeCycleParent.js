import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

 class LifeCycleParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('constructor of Parent is called !!!')
    }

    static getDerivedStateFromProps(props, state) {
        console.log(' getDerivedStateFromProps from Parent is called !!!')
        console.log(this)
        return null;
    }
    

    render() {
        console.log('render from Parent is called !!!')
        return (
            <div>
                <h1>LifeCycle of Parent</h1>
                <LifeCycleChild />
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount from Parent is called !!!')
    }
}

export default LifeCycleParent
