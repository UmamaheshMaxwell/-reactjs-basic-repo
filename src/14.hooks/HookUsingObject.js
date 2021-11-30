import React, {useState} from 'react'

function HookUsingObject() {
    const [user, setUser] = useState({firstName: '', lastName: ''})


    return (
        <div className="container">
            <form action="">
                <label htmlFor="">FirstName</label>
                <input type="text" 
                        value={user.firstName} 
                        className="form-control" 
                        onChange={(event) => setUser({...user, firstName: event.target.value})}
                />
                <br />
                <label htmlFor="">LastName</label>
                <input type="text" 
                        value={user.lastName} 
                        className="form-control" 
                        onChange={(event) => setUser({...user, lastName: event.target.value})}
                />  
                <h2>Your Firstname is : {user.firstName}</h2>
                <h2>Your Lastname is : {user.lastName}</h2>               
            </form>
        </div>
    )
}

export default HookUsingObject
