import React from 'react'

function Child(props) {
    return (
        <div>
            <h2>Call from child component using this button</h2>
            <button onClick={()=>props.callParent('child')} className="btn btn-primary">Call Parent</button>
        </div>
    )
}

export default Child
