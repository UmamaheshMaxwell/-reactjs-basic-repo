import axios from 'axios'
import React, { Component } from 'react'

export class Api extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             employees: []
        }
    }

    componentDidMount(){
        axios("http://localhost:3001/employees")
        .then(res => this.setState({employees: res.data}))
    }
    

    render() {
        return (
            <div>
               <table className="table">
                   <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                   </thead>
                   <tbody>
                    {
                        this.state.employees.map((employee) =>(
                            <tr key={employee.name}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.city}</td>
                            </tr>
                        ))
                    }
                   </tbody>
                </table> 
            </div>
        )
    }
}

export default Api
