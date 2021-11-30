import axios from 'axios'
import React, { Component } from 'react'

class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
    }
    
    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        // .then(data => this.setState({users: data}))

        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => this.setState({users: res.data}))
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Zipcode</th>
                            <th>Latitude</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user)=> (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.address.zipcode}</td>
                                    <td>{user.address.geo.lat}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
