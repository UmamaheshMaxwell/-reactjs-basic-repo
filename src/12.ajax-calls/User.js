import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: [],
             _id: '',
             Name: '',
             Email: '',
             City: ''
        }
    }

    componentDidMount(){
        this.getUsers()
    }

    getUsers(){
        fetch("http://localhost:4001/api/user")
        .then(res => res.json())
        .then(data => this.setState({users: data}))
    }

    addUser(){
        const postData = {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                City: this.state.City
            })
        }

        fetch("http://localhost:4001/api/user", postData)
        .then(res => res.json())
        .then(data => {
            this.getUsers()
            this.clearFields()
        })
    }

    clearFields(){
        this.setState({
            _id: '',
            Name: '',
            Email: '',
            City: ''
        })
    }

    editUser(userId){
        fetch(`http://localhost:4001/api/user/${userId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                _id: data[0]._id,
                Name: data[0].Name,
                Email: data[0].Email,
                City: data[0].City
            })
        })
    }

    updateUser(){
        const putData = {
            headers: {'Content-Type': 'application/json'},
            method: "PUT",
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                City: this.state.City
            })
        }

        fetch(`http://localhost:4001/api/user/${this.state._id}`, putData)
        .then(res => res.json())
        .then(data => {
            this.getUsers()
            this.clearFields()
        })
    }

    deleteUser(userId){
        const deleteObject = {
            headers: {'Content-Type': 'application/json'},
            method: "DELETE"
        }

         fetch(`http://localhost:4001/api/user/${userId}`, deleteObject )
        .then(res => res.json())
        .then(data => this.getUsers())
    }
    
    render() {
        return (
            <div className="container">
                <h1>User List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th>
                                <input type="text"
                                       value={this.state.Name}
                                       onChange={(event) => this.setState({Name: event.target.value})}
                                />
                            </th>
                            <th>
                                <input type="text"
                                       value={this.state.Email}
                                       onChange={(event) => this.setState({Email: event.target.value})}
                                />
                            </th>
                            <th>
                                <input type="text"
                                       value={this.state.City}
                                       onChange={(event) => this.setState({City: event.target.value})}
                                />
                            </th>
                            <th>
                                <button className="btn btn-primary"
                                        onClick={() => this.addUser()}
                                >Add</button>&nbsp;&nbsp;
                                <button className="btn btn-warning"
                                        onClick={() => this.updateUser()}
                                >Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.City}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={()=>this.editUser(user._id)}
                                        >Edit</button>&nbsp;&nbsp;
                                        <button className="btn btn-danger"
                                                onClick={()=>this.deleteUser(user._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default User
