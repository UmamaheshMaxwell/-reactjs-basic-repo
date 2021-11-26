import React, { Component } from 'react'

 class Welcome extends Component {
    render() {
        let {name, skill, children} = this.props
        return (
            <div>
                <h1>Name: {name} Skill : {skill} {children}</h1>
            </div>
        )
    }
}

export default Welcome

