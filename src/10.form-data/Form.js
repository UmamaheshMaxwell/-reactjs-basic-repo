import React, { Component } from 'react'

 class Form extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              username: '',
              comments: '',
              country: '',
              gender: '',
              isAdmin: false
         }
     }

     getFormData(event){
        event.preventDefault()
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
     }

     getUserName(event){
         this.setState({
             username: event.target.value
         })
     }

     getcomments(event){
        this.setState({
            comments: event.target.value
        })
    }

    getCountry(event){
        this.setState({
            country: event.target.value
        })
    }

    getGender(event){
        this.setState({
            gender: event.target.value
        })
    }

    getAdmin(event){
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }
     
    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form>
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="text" 
                               className="form-control w-50" 
                               value={this.state.username}
                               onChange={(event) => this.getUserName(event)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Comments</label>
                        <textarea className="form-control w-50" 
                               value={this.state.comments}
                               onChange={(event) => this.getcomments(event)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Country</label>
                        <select className="form-select w-50" 
                                value={this.state.country}
                                onChange={(event) => this.getCountry(event)}
                        >
                            <option value="">Select</option>
                            <option value="1">Bharat</option>
                            <option value="2">Japan</option>
                            <option value="3">Australia</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Gender</label>&nbsp;&nbsp;
                        <input type="radio" 
                               className="form-check-input" 
                               value={1}
                               onChange={(event) => this.getGender(event)}
                               name="gender"
                        />&nbsp;&nbsp;Female &nbsp;&nbsp;
                        <input type="radio" 
                               className="form-check-input" 
                               value={0}
                               onChange={(event) => this.getGender(event)}
                               name="gender"
                        />&nbsp;&nbsp;Male
                    </div>                   
                    <br />
                    <div className="form-group">
                        <label>IsAdmin</label>&nbsp;&nbsp;
                        <input type="checkbox" 
                               className="form-check-input" 
                               value={this.state.isAdmin}
                               onChange={(event) => this.getAdmin(event)}
                        />
                    </div>  
                    <br />                   
                    <div className="form-group">
                        <button className="btn btn-primary" 
                                onClick={(event) => this.getFormData(event)}
                        >Get Data</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
