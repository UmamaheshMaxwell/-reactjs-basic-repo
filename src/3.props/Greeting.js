import React from 'react'

const Greeting = (props) => {
    let {name, skill, children} = props
    return <div>
                <h1>Name:  {name} Skill: {skill} {children}</h1>
            </div>
}

export default Greeting