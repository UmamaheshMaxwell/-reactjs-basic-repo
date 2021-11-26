import React from 'react'
import './Styling.css'

function Stylesheet(props) {
    let className=props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className={className}>Welcome to Styling in ReactJS</h1>
        </div>
    )
}

export default Stylesheet
