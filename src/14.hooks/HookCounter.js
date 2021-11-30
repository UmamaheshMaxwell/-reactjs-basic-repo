import React, {useState} from 'react'

function HookCounter() {

    const [count, setCounter] = useState(0)

    return (
        <div className="container">
            <h1>Count : {count}</h1>
            <button className="btn btn-primary"
                    onClick={()=>setCounter(count+1)}
            >Increment</button>
        </div>
    )
}

export default HookCounter
