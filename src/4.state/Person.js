import React, { Component } from 'react'

 class Person extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Uma',
             city: 'bangalore',
             isActive: true
        }
    }
    

    render() {
        let {name, city, isActive} = this.state
        return (
            <div>
                <h1>Name : {name} , City: {city}</h1>
                <h1>IsAtive : {isActive? "True": "False"} </h1>
            </div>
        )
    }
}

export default Person
