import React from 'react'

function Person(props) {
    const {name, age, skill} = props.person
    return (
        <React.Fragment>
            <h2>
                I am {name}, I am {age} years old. I know {skill}
            </h2>
            <h2>Hello</h2>
        </React.Fragment>
    )
}

export default Person
