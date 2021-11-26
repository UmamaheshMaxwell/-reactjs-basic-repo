import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }

    return (
        <div>
            <button className="btn btn-primary"
                    onClick={clickHandler}
            >Click</button>
        </div>
    )
}

export default FunctionClick
