import axios from 'axios'
import React, { Component } from 'react'

class Student extends Component {

    constructor(props) {
        super(props)

        this.state = {
             students: [],
             Id: '',
             Name: '',
             Email: '',
             City: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        axios.get("http://localhost:3001/api/students")
             .then(res => this.setState({students: res.data}))
    }

    addStudent(){

        const postObject = {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                City: this.state.City
            })
        }

        console.log(postObject.body)

         fetch("http://localhost:3001/api/student",postObject )
        .then(res => res.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })

        // axios("http://localhost:3001/api/student",postObject )
        // .then(res => this.getStudents())
    }

    editStudent(studentId){
        fetch(`http://localhost:3001/api/student/${studentId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                Id: data[0].Id,
                Name: data[0].Name,
                Email: data[0].Email,
                City: data[0].City
            })
        })
    }

    updateStudent(){
        const putObject = {
            headers: {'Content-Type': 'application/json'},
            method: "PUT",
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                City: this.state.City
            })
        }

         fetch(`http://localhost:3001/api/student/${this.state.Id}`,putObject )
        .then(res => res.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    deleteStudent(studentId){
        const deleteObject = {
            headers: {'Content-Type': 'application/json'},
            method: "DELETE"
        }

         fetch(`http://localhost:3001/api/student/${studentId}`, deleteObject )
        .then(res => res.json())
        .then(data => this.getStudents())
    }

    clearFields(){
        this.setState({
            Id: '',
            Name: '',
            Email: '',
            City: ''
        })
    }


    render() {
        return (
            <div className="container">
                <h1>Student List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                             {/* <th>
                                 <input type="text"
                                        value={this.state.Id}
                                        onChange={(event) => this.setState({Id: event.target.value})}
                                        readOnly
                                 />
                            </th> */}
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
                                        onClick={()=>this.addStudent()}
                                >Add</button> &nbsp; &nbsp; &nbsp; &nbsp;
                                <button className="btn btn-warning"
                                        onClick={()=>this.updateStudent()}
                                >Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student)=>(
                            <tr key={student.Id}>
                                <td>{student.Name}</td>
                                <td>{student.Email}</td>
                                <td>{student.City}</td>
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => this.editStudent(student.Id)}
                                    >Edit</button> &nbsp; &nbsp; &nbsp; &nbsp;
                                    <button className="btn btn-danger"
                                            onClick={() => this.deleteStudent(student.Id)}
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

export default Student
