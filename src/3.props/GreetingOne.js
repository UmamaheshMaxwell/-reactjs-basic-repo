import React from 'react'

const GreetingOne = ({name, skill, children}) => {
    return <div>
                <h1>Name:  {name} Skill: {skill} {children}</h1>
            </div>
}

export default GreetingOne