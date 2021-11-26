import React from 'react'

// With JSX
// function Hello(){
//     return <div>
//                 <h1>Hello from JSX Code</h1>
//             </div>
// }

// No JSX code
function Hello(){
    return React.createElement('div', 
                                {id:'dvheader', className: 'container'}, 
           React.createElement('h1', 
                                {id:'header', className: 'classHeader'}, 
                                'Hello from JSX Code'))
}

export default Hello